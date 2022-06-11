<?php 

//conexion al servidor localhost xampp.'bouvier-music.com','u898004372_bouvierdata','Seulgivelvet123','u898004372_newsletter''localhost','root','','registro website bouvier'

$conexion = mysqli_connect('localhost','u898004372_bouvierdata','Seulgivelvet123','u898004372_newsletter')
or die(mysqli_error($mysqli)); //or die nos sirve para identificar si la conexion presenta algun error.


// se inserta codigo en la base de datos de phpadmyn de la variable $conexion.
insertar($conexion);

// Llamamos los inputs de html para agregar los datos.

function insertar($conexion){
    $name = $_POST['name'];
    $email = $_POST['email'];

// se agrega $consulta para insertar la tabla dirigida a la base de datos registro website bouvier
    
    $consulta = "INSERT INTO datosweb (name,email)
    VALUES ('$name','$email')";

// se genera la variable envio para hacer el if y ejecutar respuesta de javascript, mysqli_query une la variable $conexion (registro website bouvier) 
//con la variable $consulta (tabla datosweb)


    $envio = mysqli_query($conexion,$consulta);
    mysqli_close($conexion);


// se genera el if para que desde $envio referente a los datos envios exitosos envio mensaje prompt de suscripcion y dirije a la pagona principal.
    if($envio){
    echo "<script> alert('Great ! Thank You For Your Suscription')
    ;window.location='/news.html'</script>";
    }

}






?>