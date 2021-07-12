<?php
   session_start();
   require_once('conn.php');
   require_once('utils.php');

   if (empty($_POST['content'])) {
     header('Location: index.php?errCode=1');
     die('資料不齊全');
   }
   $user = getUserFromUsername($_SESSION['username']);
   $username = $user['username'];

   if (!hasPermission($user, 'create', 0)) {
    header("Location: index.php");
    exit;
   }

   $content = $_POST['content'];
   $sql = "insert into charisma_user(username, content) values(?, ?)";
   $stmt = $conn->prepare($sql);
   $stmt->bind_param('ss', $username, $content);
 
   $result = $stmt->execute();
   if (!$result) {
     die($conn->error);
   }

   header("Location: index.php");
 ?>
