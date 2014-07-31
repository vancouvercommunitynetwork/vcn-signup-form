<!DOCTYPE html>
<html lan="en">
<head>
	<title></title>
</head>
<body>
<?php
	$logname = $_REQUEST["login"];
	if ($logname== "Ali")
	{
		echo "true";
		return true;
	}
	else
	{
		echo "false";
		return false;
	}
?>
</body>
</html>
