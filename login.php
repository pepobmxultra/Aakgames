<?php
  require("conexion.php");
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AKK Games</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="Estilos/Style.css" type="text/css"/>
    <link rel="stylesheet" href="Estilos/login.css" type="text/css"/>
    <link rel="shortcut icon" href="Images/icon.png">
  </head>
  <body>
    <div id="particles-js"></div>
    <?php
      $var="";
      $var1="";
      $var2="";
      if (isset($_POST["Enviar"]))
      {
          $Email=$_POST["Email"];
          $pass=$_POST["pass"];
          $sql="select * from usuario where EMail='$Email'";
          $cs=mysqli_query($cn,$sql);
          while($resul=mysqli_fetch_array($cs)){
          $var=$resul[1];
          $var1=$resul[3];
          $var2=$resul[4];
          }
          if ($var1==$Email) {
            if ($var2==$pass) {
              header('Location:http://pepobmxultra.github.io/Play');
            }
            else {
              echo "<script> alert('Contraseña incorrecta');</script>";
            }
          }
          else {
            echo "<script> alert('Correo electronico incorrecto');</script>";
          }
      }
    ?>
    <center>
      <section id="Navbar">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="./index.html">Inicio</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Productos<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="./Learning.php">Learning With Maik</a></li>
                  </ul>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li><a href="./Acerca.html">Acerca de Nosotros</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contactenos<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <center>
                      <li><a href="https://www.facebook.com/pages/AAK-Games/869481683142427"><img id="f" src="Images/facebook.png"/></a></li>
                      <li><a href="https://twitter.com/AAKGames"><img id="f" src="Images/twitter.png"/></a></li>
                      <li><a href="https://plus.google.com/106977619198583829667"><img id="f" src="Images/google.png"/></a></li>
                    </center>
                  </ul>
                </li>

                <form class="navbar-form navbar-right" role="search">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Buscar"/>
                    <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                  </div>
                </form>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </section>
        <h1 id="Title">Bienvenidos a AAK Games</h1>
        </br>
        </br>
      <section>
        <div class="container">
          <div class="form-signin">
            <div id="panew" class="panel panel-default">
              <div class="panel-body">
                <form class="form-signin" action=""  method="POST">
                  <h2 class="form-signin-heading">Por favor ingrese</h2>
                  <input type="email" name="Email" id="inputEmail" class="form-control" placeholder="Correo electronico" required="" autofocus="">
                  <input type="password" name="pass"id="inputPassword" class="form-control" placeholder="Contraseña" required="">
                  <button class="btn btn-lg btn-primary btn-block" type="submit" name="Enviar">Entrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="bottom"  style="position: absolute;">
        <section id="pie">
          <nav class="pie pie-inverse">
            <div class="pie-fluid">
              AAK Games Copyright (C)
            </div>
          </nav>
        </section>
      </div>
      <section id="script">
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/particles.min.js"></script>
        <script src="js/particulas.js"></script>
      </section>
    </center>
  </body>
</html>
