<?php

// include script to read database credentials stored in config.txt
include('read_config.php');

// these constant variables are used because the mysqli constructor expect constant
// database credentials
define('servername', 'localhost');
define('username', 'student');
define('password', 'hello');
define('database', 'student_space');

// Create connection
$database_connection = new mysqli(servername, username, password, database);

// Check connection
if ($database_connection->connect_error) {
  die("Connection failed: " . $database_connection->connect_error);
}
?>