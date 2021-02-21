// Assignment Code
var stringUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var stringLower = ("abcdefghijklmnopqrstuvwxyz");
var stringNum = ("1234567890");
var stringSym = ("~!@#$%^&*()_+{},./<>?;':");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  
  passwordText.innerHTML = password
  
}

// Add event listener to generate button
// var button = document.getElementById('generate')
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var length = window.prompt("Select Password Length (8-128)")
  length = Number(length);
 
  var upper = window.prompt("Include Uppercasing? (yes/no)")
  upper = upper.toLowerCase();

  var lower = window.prompt("Include Lowercasing? (yes/no)")
  lower = lower.toLowerCase();

  var number = window.prompt("Include numbers? (yes/no)")
  number = number.toLowerCase();

  var symbol = window.prompt("Include Special Characters? (yes/no)")
  symbol = symbol.toLowerCase();

  var stringChar = " "
  var passwordChar = " "
  
  if (upper === "yes") {
    stringChar = stringChar.concat(stringUpper);
  }
  if (lower === "yes") {
    stringChar = stringChar.concat(stringLower);
  }
  if (number === "yes") {
    stringChar = stringChar.concat(stringNum);
  }
  if (symbol === "yes") {
    stringChar = stringChar.concat(stringSym);
  }

  // for loop to run random character selection from "stringChar set" based on length prompt
  for (i=0; i < length; i++) {
    // selecting random characters based on length of stringChar set
    var character = stringChar[Math.floor(Math.random() * stringChar.length)]
    // turning selected random characters into a string
    passwordChar += String(character)
    // returning/outputting the selected password generated
  } return passwordChar

  
}

