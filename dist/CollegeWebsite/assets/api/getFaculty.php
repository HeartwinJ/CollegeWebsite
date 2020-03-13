<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

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
  $result = $conn->query('SELECT * FROM FACULTY');
  if($result->num_rows > 0)
  {
    $flag = true;
    while($res = $result->fetch_assoc())
    {
      if($res['id'] == $id)
      {
        $message->result = $res;
        $message->success = 'true';
        $message->message = 'Faculty Data Fetched';
        $flag = false;
      }
    }
    if($flag)
    {
      $message->success = 'false';
      $message->message = 'No Data Available for Logged In Faculty';
    }
  }
  else
  {
    $message->success = 'false';
    $message->message = 'No Faculty Records Found';
  }
}

echo json_encode($message);

?>