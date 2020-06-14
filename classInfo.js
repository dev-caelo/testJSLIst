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

- each of these variables MUST include their respective acronym at
  the first element of this list [this is for easier accessing on the website's end]
  < also bc idk how to make this better oops >

- these lists can be as long as required to hold all of the info
*/



//individual lists: 

const infoCSA = ["CSA", "<a href='https://www.codingbat.com/java'>codingbat.com</a>", "quizlet"];
const infoCSP = ["CSP", "codingbat.com", "canvas"];


//classList: UPDATE the list with each class variable added
//keep this variable at the bottom of the file, js reads from top to bottom
const classList = [infoCSA, infoCSP];
