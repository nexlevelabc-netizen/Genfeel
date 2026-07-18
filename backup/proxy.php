<?php
header('Access-Control-Allow-Origin: https://www.genfeel.co.uk');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$data = json_decode(file_get_contents('php://input'), true);

// If no JSON data, check POST fields
if (!$data) {
    $data = $_POST;
}

// Prepare data for Zapier
$zapierData = [
    'reference' => $data['reference'] ?? '',
    'service' => $data['service'] ?? '',
    'name' => $data['name'] ?? '',
    'email' => $data['email'] ?? '',
    'phone' => $data['phone'] ?? '',
    'date' => $data['date'] ?? '',
    'time' => $data['time'] ?? '',
    'timezone' => $data['timezone'] ?? 'UK',
    'notes' => $data['notes'] ?? 'No notes',
    'source' => $data['source'] ?? 'Genfeel Chatbot'
];

// Send to Zapier
$ch = curl_init('https://hooks.zapier.com/hooks/catch/26098855/uqos5cs/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($zapierData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo json_encode(['success' => $httpCode === 200, 'reference' => $zapierData['reference']]);
?>