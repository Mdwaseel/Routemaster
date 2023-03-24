<?php
require_once 'db.php';

// Retrieve the latitude and longitude data sent by the client
if (!isset($_GET['latitude']) || !isset($_GET['longitude'])) {
  echo 'Latitude and/or longitude not provided';
  exit();
}

$latitude = $_GET['latitude'];
$longitude = $_GET['longitude'];

try {
  // Prepare and execute an SQL statement to insert the location data into the database
  $stmt = $pdo->prepare("INSERT INTO location_data (latitude, longitude) VALUES (?, ?)");
  $stmt->execute([$latitude, $longitude]);

  // Send a success response to the client
  echo 'Location data stored successfully';
} catch (PDOException $e) {
  // Send an error response to the client if there was a problem with the database or SQL statement execution
  echo 'Location data could not be stored: ' . $e->getMessage();
}
?>
