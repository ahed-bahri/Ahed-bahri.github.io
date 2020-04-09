<?php

include "connect2.php";

$nom=$_POST['nom'];
$email=$_POST['email'];
$tel=$_POST['tel'];
$sujet=$_POST['sujet'];
$msg=$_POST['msg'];

if (empty($nom) || empty($email) || empty($tel) || empty($sujet) || empty($msg) ){
    echo"<script> alert('Please,Fill input first');
    window.location.href='http://127.0.0.1:5500/index.html';
    </script>";
}
else {
    $sql="INSERT INTO contact VALUES('$nom','$email','$tel','$sujet','$msg')";
    $res=mysqli_query($connect,$sql);
    
    if ($res){      
        echo "<script>
        alert('Thank you for Contacting Us');
        window.location.href='http://127.0.0.1:5500/index.html';
        </script>";
    }  
    else{
        echo"<script> alert('Something went wrong');</script>";
    }
}

?>
