<?php
// Connect to the database or file system where location data is stored
// Replace the placeholders below with the actual credentials for your database or file system
$dsn = 'mysql:host=localhost;dbname=livelocationshare;port=3306';
$username = 'root';
$password = 'Waseel@2311';
try {
  $pdo = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
  die('Connection failed: ' . $e->getMessage());
}

// Retrieve the latest location data for the user
// This assumes that the user's ID is stored in a session variable called 'user_id'
session_start(); // You need to start the session before accessing the session variables
$user_id = $_SESSION['user_id'];
$sql = 'SELECT latitude, longitude FROM user_locations WHERE user_id = ? ORDER BY timestamp DESC LIMIT 1';
$stmt = $pdo->prepare($sql);
$stmt->execute([$user_id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$locationData = json_encode($row);

// Send the location data back as JSON
header('Content-Type: application/json');
echo $locationData;
