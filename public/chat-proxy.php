<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle CORS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => ["message" => "Method Not Allowed"]]);
    exit;
}

// Define secure entry and load config
define('SECURE_CHAT_PROXY', true);

$apiKey = getenv('NVIDIA_API_KEY');
$nvidiaModel = getenv('NVIDIA_MODEL') ?: 'openai/gpt-oss-120b';

// Fallback to local config file if env variables are not set
if (!$apiKey) {
    $configPath = __DIR__ . '/chat-config.php';
    if (file_exists($configPath)) {
        include $configPath;
        if (defined('NVIDIA_API_KEY')) {
            $apiKey = NVIDIA_API_KEY;
        }
        if (defined('NVIDIA_MODEL')) {
            $nvidiaModel = NVIDIA_MODEL;
        }
    }
}

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(["error" => ["message" => "API key is not configured on the server."]]);
    exit;
}

// Read POST data from client
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['messages'])) {
    http_response_code(400);
    echo json_encode(["error" => ["message" => "Invalid request payload. 'messages' is required."]]);
    exit;
}

// Prepare the request to NVIDIA API
$nvidiaUrl = 'https://integrate.api.nvidia.com/v1/chat/completions';

$payload = [
    "model" => isset($data['model']) ? $data['model'] : $nvidiaModel,
    "messages" => $data['messages'],
    "temperature" => isset($data['temperature']) ? (float)$data['temperature'] : 1.0,
    "top_p" => isset($data['top_p']) ? (float)$data['top_p'] : 1.0,
    "max_tokens" => isset($data['max_tokens']) ? (int)$data['max_tokens'] : 1024,
    "stream" => false
];

// Initialize cURL
$ch = curl_init($nvidiaUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

// Execute cURL request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    $errorMsg = curl_error($ch);
    curl_close($ch);
    http_response_code(500);
    echo json_encode(["error" => ["message" => "Proxy Error: " . $errorMsg]]);
    exit;
}

curl_close($ch);

// Return NVIDIA API response to client
http_response_code($httpCode);
echo $response;
