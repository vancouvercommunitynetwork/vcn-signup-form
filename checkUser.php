<!DOCTYPE html>
<html lan="en">
<head>
	<title></title>
</head>
<body>
<?php

echo "hello".'<br>';
echo $_GET["login"];

	$names = array ("ali","Ali","TEST","test","one","");
	echo "<br>";
	if (in_array($_GET["login"], $names))
	{
		echo "false";
	}
	else
	{
		echo "true";
	}

?>
</body>
</html>
