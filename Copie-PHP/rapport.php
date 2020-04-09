<?php
session_start();
echo "<h2 class='text-center'> Welcome <span style=font-weight:700><u>".$_SESSION['login_user']."</u></span></h2>";
echo"<div class='text-center'><a href='logout.php'><button type='button' class='btn btn-md btn-danger'>EXIT</button></a></div>";

include "connect2.php";
$sql="SELECT * FROM contact";
$sql2="SELECT * FROM ticket";
$res=mysqli_query($connect,$sql);
$res2=mysqli_query($connect,$sql2);
if (mysqli_num_rows($res)>0 || mysqli_num_rows($res2)){
    echo"
    <html>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>    
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous'>
            <link rel='stylesheet' href='http:localhost:5500/css/rapportStyle.css'>
            <title>Rapport</title>
        </head>
        <body>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-12 col-md-6 Feedbacks'>
                        <h4 style='font-weight:500'>Feedbacks</4>
                        <table class='table table-hover table-dark'>
                        <thead>
                            <tr>
                                <th class='text-center'>Name  </th>
                                <th  class='text-center'>E-mail  </th>
                                <th  class='text-center'>Phone  </th>
                                <th class='text-center'>Subject  </th>
                                <th class='text-center'> Content </th>
                            </tr>
                        </thead>";
                        while($row=mysqli_fetch_assoc($res)){
                                echo"<tbody>
                                <tr>
                                    <td  class='bg-primary'>".$row['name']."</td>
                                    <td  class=''>".$row['email']."</td>
                                    <td  class='bg-success'>".$row['phone']."</td>
                                    <td  class=''>".$row['subject']."</td>
                                    <td  class='bg-danger'>".$row['content']."</td>
                                </tr>
                            </tbody>";
                        };
                        echo "</table>
                      </div>
                    </div>"; // End of col1

                    echo "<div class='col-lg-12 col-md-6 Tickets'>
                        <h4 style='font-weight:500'>Ticket Reserved</4>
                        <table class='table table-hover table-dark'>
                        <thead>
                            <tr>
                                <th class='text-center'>Name  </th>
                                <th  class='text-center'>E-mail Address  </th>
                                <th  class='text-center'>Phone  </th>
                            </tr>
                        </thead>";
                        while($row=mysqli_fetch_assoc($res2)){
                                echo"<tbody>
                                <tr>
                                    <td  class='bg-primary'>".$row['name']."</td>
                                    <td  class=''>".$row['adress']."</td>
                                    <td  class='bg-success'>".$row['tel']."</td>
                                </tr>
                            </tbody>";
                        };
                        echo "</table>
                    </div>
                    </div>";"
                </div>FIN Row
            <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl' crossorigin='anonymous'></script>
        </body>
    </html>";
    }


?>