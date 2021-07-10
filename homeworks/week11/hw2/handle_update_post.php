<?php
   session_start();
   require_once('conn.php');
   require_once('utils.php');

   if (empty($_POST['content']) || empty($_POST['title'])) {
     header('Location: update_post.php?errCode=1&id=' . $_POST['id']);
     die('資料不齊全');
   }
   $username = $_SESSION['username'];
   $user = getUserFromUsername($username);
   $id = $_POST['id'];
   $content = $_POST['content'];
   $title = $_POST['title'];
   $sql = "update charisma_posts set content=?, title=? where id=? and username=?";
   $stmt = $conn->prepare($sql);
   $stmt->bind_param('ssis', $content, $title, $id, $username);
   
   
   $result = $stmt->execute();  
   if (!$result) {
     die($conn->error);
   }

   header("Location: admin.php");
 ?>