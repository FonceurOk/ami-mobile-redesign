<?php
require_once './auto-load.php';

define('ROOT', dirname(__FILE__, 1));

use App\Controller\HomeController;

$homeController = new HomeController();

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
switch ($url) {
    case "/":
        $homeController->index();
        break;

    default:
        http_response_code(404);
        echo "Route introuvable";
}
