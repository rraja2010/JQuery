<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script type="text/javascript" src="jquery-1.11.1.js"></script>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form id="myAjaxRequestForm">
		<fieldset>
			<legend>jQuery Ajax Form data Submit Request</legend>

			<p>
				<label for="countryCode">Country Code:</label> <input
					id="countryCode" type="text" name="countryCode" />
			</p>
			<p>
				<input id="myButton" type="button" value="Submit" />
			</p>
		</fieldset>
	</form>
	<div id="anotherSection">
		<fieldset>
			<legend>Response from jQuery Ajax Request</legend>
			<div id="ajaxResponse"></div>
		</fieldset>
	</div>
</body>
</html>