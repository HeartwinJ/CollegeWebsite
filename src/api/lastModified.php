<?php
$stat = stat('/');
echo 'Modification time: ' . $stat['mtime'];
echo json_encode(['data' => $stat]);
?>  