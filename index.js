const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let removedChar = "";
let leftoverChar = ""
removedChar = str.slice(0,3);
leftoverChar = str.slice(3)
console.log(leftoverChar + removedChar)


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The organization is called ${str} not ${leftoverChar + removedChar}.`);


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//let userInput 
//userInput = input.question("Enter how many letters to remove: ");
//console.log(str.slice(Number(userInput))+str.slice(0,Number(userInput)));

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let userInput 
userInput = input.question("Enter how many letters to remove: ");
if (userInput > str.length)  {
  console.log(`Entry invalid. Moved 3 characters instead: ${str.slice(3)+str.slice(0,3)}`);
} else{
  console.log(str.slice(Number(userInput))+str.slice(0,Number(userInput)));
}