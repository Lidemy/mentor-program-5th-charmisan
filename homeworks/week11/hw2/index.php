<?php
   session_start();
   require_once("conn.php");
   require_once("utils.php");

   $username = NULL;
   $user = NULL;
   if(!empty($_SESSION['username'])) {
     $username = $_SESSION['username'];
     $user = getUserFromUsername($username);
   }

   $page = 1;
   if (!empty($_GET['page'])) {
    $page = intval($_GET['page']);
   }
   $items_per_pages = 5;
   $offset = ($page - 1) * $items_per_pages;


   $stmt = $conn->prepare(
     'select '.
     'C.id as id, C.content as content, '.
     'C.created_at as created_at, U.nickname as nickname, U.username as username '.
     'from charisma_user as C ' .
     'left join charisma_db as U on C.username = U.username '.
     'where C.is_deleted is NULL ' .
     'order by C.id desc ' .
     'limit ? offset ? ' 
   );
   $stmt->bind_param('ii', $items_per_pages, $offset);
   $result = $stmt->execute();

   if (!$result) {
     die('Error:' . $conn->error);
   }
   $result = $stmt->get_result();
?>

<!DOCTYPE html>

 <html>
 <head>
   <meta charset="utf-8">

   <title>留言板</title>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link rel="stylesheet" href="https://necolas.github.io/normalize.css/latest/normalize.css" />
   <link rel="stylesheet" href="./style.css" />
 </head>

 <body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <?php if (!$username) { ?>
     <a class="board__btn" href="register.php">註冊</a>
     <a class="board__btn" href="login.php">登入</a>
    <?php } else { ?>
     <a class="board__btn" href="logout.php">登出</a>
     <span class="board__btn update-nickname">編輯暱稱</span>
     <?php if ($user && $user['role'] === 'ADMIN') { ?>
      <a class="board__btn" href="admin.php">管理後台</a>
     <?php  }  ?>
     <form class="hide board__nickname-form board__new-comment-form" method="POST" action="update_nickname.php">
      <div class="board__nickname">
        <span>新的暱稱：</span>
        <input type="text" name="nickname" />
      </div>
      <input class="board__sumit-btn" type="submit" />
     </form>
     <h3>你好！<?php echo $user['nickname']; ?> </h3>
    <?php } ?>  
    <h1 class="board__title" >Comments</h1>
    <?php
       if (!empty($_GET['errCode'])) {
         $code = $_GET['errCode'];
         $msg = 'Error';
         if ($code === '1') {
           $msg = '資料不齊全';
         }
         echo '<h2 class="error">錯誤：' . $msg . '</h2>';
       }
    ?>
      <form class="form__new-comment-form" method="POST" action="handle_add_comment.php">
        <textarea name="content" rows="5"></textarea>
        <?php if ($username && !hasPermission($user, 'create', NULL)) { ?>
          <h3>你已被停權</h3>
        <?php  } else if ($username) {  ?>          
          <input class="board__sumit-btn" type="submit" />
        <?php } else { ?>
          <h3>請登入發布留言</h3> 
        <?php } ?>   
      </form>
    <hr />
    <section>
      <?php
           while($row = $result->fetch_assoc()) {
         ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__author"><?php echo escape($row['nickname']); ?>(@<?php echo escape($row['username']); ?>)</span>
            <span class="card__time"><?php echo escape($row['created_at']); ?></span>
          </div>
          <p class="card__content"><?php echo escape($row['content']); ?></p>
          <?php if (hasPermission($user, 'update', $row)) { ?>
            <a href="update_comment.php?id=<?php echo $row['id'] ?>">編輯</a>
            <a href="delete_comment.php?id=<?php echo $row['id'] ?>">刪除</a>
          <?php } ?>
        </div>  
      </div>
    <?php } ?>
    </section>
    <hr />
    <?php
      $stmt = $conn->prepare(
         'select count(id) as count from charisma_user where is_deleted is NULL'
      );
      $result = $stmt->execute();
      $result = $stmt->get_result();
      $row = $result->fetch_assoc();
      $count =  $row['count'];
      $total_page = intval(ceil($count / $items_per_pages));

    ?>    
    <div class="page-info">
      <span>總共有 <?php echo $count ?> 筆留言，頁數：</span>
      <span><?php echo $page ?> / <?php echo $total_page ?></span>
    </div>
    <div class="pagenator">
      
      <?php if ($page !== 1) { ?>
        <a href="index.php?page=1">首頁</a>
        <a href="index.php?page=<?php echo $page - 1 ?>">上一頁</a>
      <?php } ?>
      <?php if ($page !== $total_page) { ?>  
        <a href="index.php?page=<?php echo $page + 1 ?>">下一頁</a>
        <a href="index.php?page=<?php echo $total_page ?>">最末頁</a>
      <?php } ?>        
      
    </div>
  </main>
  <script>
     const btn = document.querySelector('.update-nickname')
     btn.addEventListener('click', ()=>{
       const form = document.querySelector('.board__nickname-form')
       form.classList.toggle('hide')
     })
   </script>
 </body>
 </html> 