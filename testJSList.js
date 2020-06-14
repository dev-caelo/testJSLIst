/*
These methods alter the info <p> tag in the html page.

Upon user clicking on the button, the respective class' information
appears on the screen.
*/

//EDIT: STICK TO BUTTONS, ITS EASIER AND LOOKS BETTER

function fillInfo(classKey) {
	var myList = getClass(String(classKey));

	if(myList == undefined) {
		document.getElementById("info").innerHTML = "undefined class";
	}
	if(myList != undefined) {
		var text = document.getElementById(myList[0]).innerHTML;
		for(var i = 1; i < myList.length; i++) {
			text += myList[i] + "<br>";
		}		
		if(document.getElementById(myList[0]).innerHTML.localeCompare("") == 0) {
			document.getElementById(myList[0]).innerHTML = text;
		}
	}
}

function getClass(classKey) {
	for(var i = 0; i < classList.length; i++) {
		if(classList[i][0].localeCompare(classKey) == 0) {
			return classList[i];
		}
	}

	return null;
}

const idList = ["info", "CSA", "CSP"]; //change

function clr() {
	for(var i = 0; i < idList.length; i++) {
		document.getElementById(idList[i]).innerHTML = "";
	}
}

const test = "Test";