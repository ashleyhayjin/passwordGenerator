// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//Prompt for the number of characters
//Password options Y/N for numbers, special characters, and letters

var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letterList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialList = [",", "!", "?", "@", "*", "#", "/", "&"];
var finalList = [];
var finalPassword = "";


function getPasswordOptions() {

  var characterAmount = prompt(
    "How many characters would you like in your password? (Min: 8 Max: 128)?"
  );

  var numberChar = confirm("Do you want number characters?");
  var letterChar = confirm("Do you want lowercase letter characters?");
  var upperCaseChar = confirm("Do you want capital letters?");
  var specialChar = confirm("Do you want special characters?");
}



function randomizer() {
  for (i = 0; i < characterAmount; i++) {
    var characterPick = finalList[Math.floor(Math.random() * characterAmount)];
    console.log(characterPick);
  }
}


function generatePassword() {
  if (
    numberChar !== true &&
    letterChar !== true &&
    upperCaseChar !== true &&
    specialChar !== true
  ) {
    alert("You must select one");
  }

  if (numberChar === true) {
    var finalList = [numberList];
  }
  if (numberChar === true && letterChar === true) {
    var finalList = [numberList + letterList];
  }
  if (numberChar === true && letterChar === true && upperCaseChar === true) {
    var finalList = [numberList + letterList + upperCaseList];
  }
  if (
    numberChar === true &&
    letterChar === true &&
    upperCaseChar === true &&
    specialChar === true
  ) {
    var finalList = [numberList + letterList + upperCaseList + specialList];
  }
}

generatePassword();
randomizer();


//Function will generate
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
