// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//Prompt for the number of characters
//Password options Y/N for numbers, special characters, and letters

//Function will generate
function writePassword() {
  var password = passwordRandomizer();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
var finalList;
var characterAmount;
var finalStringList;



function generatePassword() {
  // initial prompt for length of the password
   finalList = [];
   characterAmount = parseInt(
    prompt(
      "How many characters would you like in your password? (Min: 8 Max: 128)?"
    )
  );

  if (characterAmount < 8 || characterAmount > 128) {
    alert("Your amount needs to be between 8 and 128.");
  } else {
    var numberChar = confirm("Do you want number characters?");
    var letterChar = confirm("Do you want lowercase letter characters?");
    var upperCaseChar = confirm("Do you want capital letters?");
    var specialChar = confirm("Do you want special characters?");
  }

  //making the final character set.

  if (
    numberChar !== true &&
    letterChar !== true &&
    upperCaseChar !== true &&
    specialChar !== true
  ) {
    alert("You must select one");
  }

  //all 4 confirm
  if (
    upperCaseChar === true &&
    letterChar === true &&
    specialChar === true &&
    numberChar === true
  ) {
    finalList = upperCaseList.concat(letterList, specialList, numberList);
  }
  //3 confirms
  else if (
    upperCaseChar === true &&
    letterChar === true &&
    specialChar === true
  ) {
    finalList = upperCaseList.concat(letterList, specialList);
  } else if (
    upperCaseChar === true &&
    letterChar === true &&
    numberChar === true
  ) {
    finalList = upperCaseList.concat(letterList, numberList);
  } else if (
    numberChar === true &&
    letterChar === true &&
    specialChar === true
  ) {
    finalList = numberList.concat(letterList, specialList);
  } else if (
    numberChar === true &&
    upperCaseChar === true &&
    specialChar === true
  ) {
    finalList = numberList.concat(upperCaseList, specialList);
  }
  //2 confirm
  else if (numberChar === true && letterChar === true) {
    finalList = numberList.concat(letterList);
  } else if (numberChar === true && upperCaseChar === true) {
    finalList = numberList.concat(upperCaseList);
  } else if (numberChar === true && specialChar === true) {
    finalList = numberList.concat(specialList);
  } else if (letterChar === true && upperCaseChar === true) {
    finalList = letterList.concat(upperCaseList);
  } else if (letterChar === true && specialChar === true) {
    finalList = letterList.concat(specialList);
  } else if (upperCaseChar === true && specialChar === true) {
    finalList = upperCaseList.concat(specialList);
  }
  //1 confirm
  else if (numberChar === true) {
    finalList = numberList;
  } else if (letterChar === true) {
    finalList = letterList;
  } else if (upperCaseChar === true) {
    finalList = upperCaseList;
  } else if (specialChar === true) {
    finalList = specialList;
  }
  finalStringList = finalList.toString();
  console.log(finalStringList);



};

var finalPassword;
var finalPullList;
// var finalStringList = finalList.toString();

// console.log(finalStringList);

function passwordRandomizer() {;
  for (var i = 0; i < characterAmount; i++) {
    finalPullList = finalStringList.replace(/,/g, ""); 
    console.log(finalPullList);
    finalPassword += finalPullList[Math.floor(Math.random() * finalStringList.length)];
    console.log(finalPassword);
    return finalPassword;
};
};


generatePassword();
passwordRandomizer();
writePassword();
