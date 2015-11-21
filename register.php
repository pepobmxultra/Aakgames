<?php
  require("conexion.php");
?>
<?php
  if (isset($_POST["Enviar"]))
  {

      $nombre=$_POST["Name"];
      $usuario=$_POST["Usuario"];
      $Email=$_POST["Email"];
      $pass=$_POST["pass_2"];
      $Fecha_N=$_POST["Fn"];
      $genero=$_POST["genero"];
      $sql="insert into usuario values ('','$nombre','$usuario','$Email','$pass','$Fecha_N','$genero')";
      $cs=mysqli_query($cn,$sql);
  }
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
    <meta http-equiv="refresh" content="2;url=login.php">
  </head>
  <body>
    <div id="particles-js"></div>
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
      <section>
        <h1 id="Title">Bienvenidos a AAK Games</h1>
        </br>
        <div class="alert alert-success" role="alert">
          <strong>Registrado Correctamente.</strong>
        </div>
      </section>
      <section id="men">
        <div class="container">
          <div class="form-signin">
            <div id="panew" class="panel panel-default">
              <div class="panel-body">
                <form class="form-signin" action="register.php"  method="POST">
                  <h2 class="form-signin-heading">Por favor ingrese sus datos</h2>
                  <input type="text" name="Name" id="inputName" class="form-control" placeholder="Nombre Completo *" required="" autofocus="">
                  <input type="text" name="Usuario" id="inputName" class="form-control" placeholder="Usuario *" required="" autofocus="">
                  <input type="email" name="Email" id="inputEmail" class="form-control" placeholder="Correo electronico *" required="" autofocus="">
                  <input type="password" name="pass_1" id="pass_1" class="form-control" placeholder="Contraseña *" required="">
                  <input type="password" name="pass_2" id="pass_2" class="form-control" placeholder="Confirmar contraseña *" required="">
                  <span name="er" id="er"style="visibility:hidden">
                    <div class="alert alert-danger" role="alert">
                      <strong>Las contraseñas no coinciden.</strong>
                    </div>
                  </span>
                  <div class="pie-fluid">Fecha de nacimiento *</div>
                  <input type="date" name="Fn" id="inputdate" class="form-control" required="">
                  <div class="pie-fluid">Sexo *
                    <br/>
                    <input type="Radio" name="genero" required="" value="Mujer">Mujer
                    &nbsp
                    <input type="Radio" name="genero" required="" value="Hombre">Hombre
                  </div>
                  </br>
                  <button class="btn btn-lg btn-primary btn-block" type="submit" name="Enviar">Registar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="foter">
        <div class="bottom" style=" position: relative">
          <section id="pie">
            <nav class="pie pie-inverse">
              <div class="pie-fluid">
                AAK Games Copyright (C)
              </div>
            </nav>
          </section>
        </div>
      </section>
      <section id="script">
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
        <script type="text/javascript" />
          $('#pass_1').keyup(function(){
            var _this = $('#pass_1');
            var pass_1 = $('#pass_1').val();
                        _this.attr('style', 'background:white');
            if(pass_1.charAt(0) == ' '){
              _this.attr('style', 'background:#FF4A4A');
            }

            if(_this.val() == ''){
              _this.attr('style', 'background:#FF4A4A');
            }
          });

          $('#pass_2').keyup(function(){
            var pass_1 = $('#pass_1').val();
            var pass_2 = $('#pass_2').val();
            var _this = $('#pass_2');
            var _q = $('#er');
                        _this.attr('style', 'background:white');
                        _q.attr('style','visibility: hidden');
            if(pass_1 != pass_2 && pass_2 != ''){
              _this.attr('style', 'background:#FF4A4A');
              _q.attr('style','visibility: visible');
            }
          });

          JavaScript
        </script>
        <script src="js/particles.min.js"></script>
        <script src="js/particulas.js"></script>
      </section>
    </center>
  </body>
</html>
