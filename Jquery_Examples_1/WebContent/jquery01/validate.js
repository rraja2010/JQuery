var records = new Array();

function validateAndAdd()
{
	if (validate())
	{
		var myForm = document.forms[0];
		var firstName = myForm.firstName;
		var lastName = myForm.lastName;
		var age = myForm.age;
		var email = myForm.email;
		var record = new Array();
		record[0] = firstName.value;
		record[1] = lastName.value;
		record[2] = age.value;
		record[3] = email.value;
		records[record.length] = record;

		myForm.reset();

		populateRecords();
	}
}

function validate()
{
	var myForm = document.forms[0];
	var firstName = myForm.firstName;
	var lastName = myForm.lastName;
	var age = myForm.age;
	var email = myForm.email;
	
	if(firstName.value.length==0)
		{
			alert("PLS ENTER FIRST NAME!!");
			firstName.focus();
			return false;
		}
	if(lastName.value.length==0)
		{
			alert("PLS ENTER LAST NAME!!");
			lastName.focus();
			return false;
		}
	
	if(age.value.length==0)
		{
			alert("PLS ENTER THE AGE!1");
			age.focus();
			return false;
		}
	if(email.value.length==0)
		{
			alert("PLS ENTER THE EMAIL!!");
			email.focus();
			return false;
		}
	
	return true;
}


function populateRecords()
{
	var recordsStr = "No Records To Display";
	var submitStr="";
	if(records.length>0)
		{
			recordsStr="<table border='1'>";
				recordsStr+="<tr>";
					recordsStr+="<th>SNO</th>";
					recordsStr+="<th>First Name</th>";
					recordsStr+="<th>Last Name</th>";
					recordsStr+="<th>Age</th>";
					recordsStr+="<th>Email</th>";
				recordsStr+="</tr>";
			
				var record;
				for(var i=0;i<records.length;i++)
					{
						record=records[i];
						recordsStr+="<tr>";
							recordsStr+="<td>";
								recordsStr+="<a href='#' onclick='retrieve(" + i + " )'> "+(i+1)+" </a>";
							recordsStr+="</td>";
							recordsStr+="<td>"+record[0]+"</td>";
							recordsStr+="<td>"+record[1]+"</td>";
							recordsStr+="<td>"+record[2]+"</td>";
							recordsStr+="<td>"+record[3]+"</td>";
						recordsStr+="</tr>";
					}
			recordsStr+="</table>";
			submitStr="<input type='submit' value='submit'>";
		}
	
	document.getElementById("records").innerHTML=recordsStr;
	document.getElementById("submit").innerHTML=submitStr;
	
}

function retrieve(index)
{
	var record=records[index];
	var myForm = document.forms[0];
	var firstName = myForm.firstName;
	var lastName = myForm.lastName;
	var age = myForm.age;
	var email = myForm.email;
	
	firstName.value=record[0];
	lastName.value=record[1];
	age.value=record[2];
	email.value=record[3];
	records.splice(index,1);
	populateRecords();
}