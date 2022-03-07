<?php
    include("con_db.php");

    if (isset($_POST['register'])){
        if (strlen($_POST['name']) >=1 && strlen($_POST['email']) >= 1){
            $name = trim ($_POST['name']);
            $email = trim($_POST['email']);
            $fecha_registro = date("d /m /y");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            $consulta ="INSERT INTO base de datos bouvier(name, email, fecha_registro) VALUES ('$name','$email','$fecha_registro')";
            $resultado = mysqli_query($conex,$consulta);
            
            if ($resultado){
                ?>
                <h2 class="ok"> ¡ Te has suscrito correctamente !</h2>
                <?php
            } else {
                ?>
                <h2 class="bad"> ¡ Ups ha ocurrido un error !</h2>
                <?php
            } else {
                ?>
                <h2 class="bad"> ¡ Por favor completa los campos !</h2>
                <?php
            }
        }
    }
?>

