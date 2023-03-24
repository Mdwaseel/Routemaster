<?php
// Replace the placeholders below with the actual credentials for your database
$dbhost = 'localhost';
$dbname = 'livelocationshare';
$dbuser = 'root';
$dbpass = 'Waseel@2311';

// Create a PDO connection to the database
try {
    $pdo = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
