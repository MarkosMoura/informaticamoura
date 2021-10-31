<?php
include_once ('conexao.php');
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);
$sexo = $_POST['sexo'];
$data = $_POST['date'];

$resultado = "INSERT INTO clientes(nome,email,senha,sexo,data) VALUES ('$nome','$email','$senha','$sexo','$data')";

$resultado = mysqli_query($conexao, $resultado);
header('Location:../index.html');


?>