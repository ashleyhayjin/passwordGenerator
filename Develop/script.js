// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//Prompt for the number of characters
//Password options Y/N for numbers, special characters, and letters

var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letterList = ["a", "b", "c" , "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCaseList = ["A","B","C","D","E","F","G", "H", "I", "J", "K", "L", "M", "N", "O"
var letterUpperList = letterList.upperCase();
console.log(upperCaseList);
var specialList = [",", "!", "?", "@", "*", "#", "/", "&"];


function getPasswordOptions() {
  var characterAmount = prompt(
    "How many characters would you like in your password? (Min: 8 Max: 128)?"
  );
  var numberChar = confirm("Do you want number characters?");
  var letterChar = confirm("Do you want lowercase letter characters?");
  ver capitalChar = confirm("Do you want capital letters?");
  var specialChar = confirm("Do you want special characters?");

  if (numberChar !== true && letterChar !== true && specialChar !== true) {
    alert("You must select one");
  }
//if/else statements??

  var passwordFinal = {
      numberList: numberChar,
      letterList: letterChar,
      specialList: specialChar
      capitalChar : 
  };
}

// function randomizer() {
//   for (i=0; i < characterAmount.length; i++) {
//     var characterPick = passwordFinal[Math.floor(Math.random() * characterAmount.length)
//     ];
//   }
// }

getPasswordOptions();

function generatePassword() {}

//Function will generate
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
