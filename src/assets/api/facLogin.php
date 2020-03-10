<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

//For Testing ONLY
//$username = 'admin';
//$password = 'admin';

class jsonMessage{
    public $success = "";
    public $message = "";
}
$message = new jsonMessage();

//$servername = "192.168.56.102";
//$dbuser = "admin";
//$dbpass = "admin";
//$dbname = "CollegeWebsite";

$servername = "sql108.epizy.com";
$dbuser = "id9739330_admin";
$dbpass = "7E7jc4lGWZPTfh";
$dbname = "epiz_24030057_CollegeWebsite";

$conn = new mysqli($servername, $dbuser, $dbpass, $dbname);
if($conn->connect_error)
{
    $message->success = 'false';
    $message->message = 'Connection to the Database Failed!';
}
else
{
    $query = 'SELECT * FROM CREDENTIALS WHERE USERNAME="' . $username . '" AND PASSWORD="' . $password . '";';
    $result = $conn->query($query);
    if($result->num_rows > 0)
    {
        while($temp = $result->fetch_assoc())
        {
            $id = $temp['ID'];
        }
        $message->success = 'true';
        $message->message = 'Login Successful';
        $message->id = $id;
    }
    else
    {
        $message->success = 'false';
        $message->message = 'Login Unsuccessful!';
    }
}

echo json_encode($message);

?>