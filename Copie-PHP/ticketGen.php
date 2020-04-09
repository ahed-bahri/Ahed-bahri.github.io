<?php

include "connect2.php";

$nom=$_POST['nom'];
$adresse=$_POST['adresse'];
$tele=$_POST['tele'];

if (empty($nom) || empty($adresse) || empty($tele) ){
    echo"<script> alert('Please,Fill input first');
    window.location.href='http://127.0.0.1:5500/ticket.html';
    </script>";
}
else {
    $sql="INSERT INTO ticket VALUES('$nom','$adresse','$tele')";
    $res=mysqli_query($connect,$sql);
    
    if ($res){      
        echo "<script>
        alert('Thank you for joining');
        window.location.href='http://127.0.0.1:5500/index.html';
        </script>";
    }  
    else{
        echo"<script> alert('Something went wrong');</script>";
    }
}

?>