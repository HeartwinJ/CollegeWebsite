<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$data = json_decode(file_get_contents("php://input"));

$facDetails = $data->fac;

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
  $query = "UPDATE FACULTY SET profilePicture = '$facDetails->profilePicture', name = '$facDetails->name', scholarsGuided = '$facDetails->scholarsGuided', educationalQualification = '$facDetails->educationalQualification', proffesionalExperience = '$facDetails->proffesionalExperience', journalPapers = '$facDetails->journalPapers', confPapers = '$facDetails->confPapers', researchProj = '$facDetails->researchProj', consultProj = '$facDetails->consultProj', patentsGranted = '$facDetails->patentsGranted', adminResponsibilities = '$facDetails->adminResponsibilities', workOrganised = '$facDetails->workOrganised', programsConducted = '$facDetails->programsConducted', labEstablished = '$facDetails->labEstablished', booksPublished = '$facDetails->booksPublished', outreachActivities = '$facDetails->outreachActivities', proffesionalMembership = '$facDetails->proffesionalMembership', googleScholarLink = '$facDetails->googleScholarLink', profilePageLink = '$facDetails->profilePageLink' WHERE id = '$facDetails->id';";
  $result = $conn->query($query);
  $message->success = 'true';
  $message->message = 'Updated Faculty Details!';
}

echo json_encode($message);

?>