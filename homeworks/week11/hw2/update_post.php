<?php
   session_start();
   require_once("conn.php");
   require_once("utils.php");
   require_once("check_permission.php");
   $id = $_GET['id'];
   $stmt = $conn->prepare(
     'select * from charisma_posts where id =?'
   );
   $stmt->bind_param("i", $id);
   $result = $stmt->execute();

   if (!$result) {
     die('Error:' . $conn->error);
   }
   $result = $stmt->get_result();
   $row = $result->fetch_assoc();
?>
<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <?php include_once('header.php') ?>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_update_post.php" method="POST">
          <div class="edit-post__title">
            編輯文章：
          </div>
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
          <div class="edit-post__input-wrapper">
            <input name="title" class="edit-post__input" value="<?php echo $row['title']; ?>" />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name="content" rows="20" class="edit-post__content"><?php echo $row['content']; ?></textarea>
            <input type="hidden" name="id" value="<?php echo $row['id'] ?>" />
          </div>
          <div class="edit-post__btn-wrapper">
              <input type= "submit" class="edit-post__btn" 送出/>
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>