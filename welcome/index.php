<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Welcome</title>
	<link rel="apple-touch-icon-precomposed" href="../img/app/icon.png">
	<link rel="apple-touch-icon" href="../img/app/icon.png">
	<link rel="apple-touch-startup-image" href="../img/loading.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">
	<!-- addtohome -->
	<link rel="stylesheet" href="../lib/addtohome/style/add2home.css">
	<script type="application/javascript" src="../lib/addtohome/src/add2home.js"></script>
	<style>
		body {
			font-family: Graublau Sans Web, Lucida Grande, Helvetica, Verdana, sans-serif;
			color: #759eb4;
		}

		input {
			padding: 10px;
		}
	</style>
	<script type="text/javascript">
		function gomain() { // Go to main app & set the local data to remember this choice
			window.localStorage.setItem('iwelcome-avoid', 1);
			document.location = '../';
		}
		if (window.navigator.standalone) // Inside an iPhone home app - redirect to full app
			gomain();

		var addToHomeConfig = {
			animationIn: 'bubble',
			animationOut: 'drop',
			startDelay: 100,
			lifespan:30000,
			expire:0,
			touchIcon:true,
			message:'Click `%icon` to add this app to your home screen.'
		};
	</script>
</head>
<body>
<div align="center">
	<p><img src="../img/logo.png"/></p>
	<p>Please install this application to your home screen to get the full experience.</p>
	<p><input type="button" value="Continue anyway" onclick="gomain()"/></p>
</div>
</body>
<html>
