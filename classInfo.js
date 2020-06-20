/*
classInfo: holds a list which holds info about each individual -listed- ap class
on curricullege
*/


/* TODO: 

- 6/13/20: create a list for each of our listed websites on the google doc

*/


/* INFO:

classList: a variable accessed by the webpage to display individualized class information

individual lists: every list variable should have a variable name as such:

info<classAcronym>

- classKEY: each of these variables MUST include their respective acronym at
  the first element of this list [this is for easier accessing on the website's end]
  < also bc idk how to make this better oops >

- length: these lists can be as long as required to hold all of the info

- url links: these must be embedded into the string with an HTML <a> tag to function
	
	ex: <a href='[insert full https link here]'>[shortened url]</a>

*/

/* EXAMPLE:

	const info<CLASSNAME> = [
	"classKEY", 
	"classNAME",
	"<a href='https://www.youtube.com'>YouTube</a>",
	];

*/


//individual lists: 

const infoCSA = [
	"csa", 
	"CSA",
	"<a href='https://www.codingbat.com/java'>- Java Practice - codingbat.com</a>", 
	"<a href='https://youtu.be/RRubcjpTkks'>- Alex Lee - Learn Java in 14 minutes (seriously)</a>",
	];

const infoCSP = [
	"csp", 
	"CSP",
	"<a href='https://www.codingbat.com/python'>- Python Practice - codingbat.com</a>", 
	"<a href='https://quizlet.com/207034674/ap-computer-science-principles-exam-quizlet-flash-cards/'>- Quizlet - CS Terminology</a>",
	];


//classList: UPDATE the list with each class variable added
//keep this variable at the bottom of the file, js reads from top to bottom
const classList = [infoCSA, infoCSP];
