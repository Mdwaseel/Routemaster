<?php
require_once 'db.php';

// Retrieve the latitude and longitude data sent by the client
$latitude = $_GET['latitude'];
$longitude = $_GET['longitude'];

// Prepare and execute an SQL statement to insert the location data into the database
$stmt = $pdo->prepare("INSERT INTO location_data (latitude, longitude) VALUES (?, ?)");
$stmt->execute([$latitude, $longitude]);

// Send a success response to the client
echo 'Location data stored successfully';
?>
