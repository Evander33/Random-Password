// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userInput = window.prompt("How long would you like your password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Please choose a number");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose number between 8 and 128");
    return;
  }

  var useNumbers = window.confirm(
    "Would you like to use numbers in the password?"
  );
  var useSymbols = window.confirm(
    "Would you like to use symbols in the password?"
  );
  var useLowerCase = window.confirm(
    "Would you like to use lower case characters in the password?"
  );
  var useUpperCase = window.confirm(
    "Would you like to use upper case characters in the password?"
  );

  var useSymbolsList = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  var useNumbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var useLowerCaseList = [
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
  var useUpperCaseList = [
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

  var characterOptions = [];

  if (useNumbers) {
    characterOptions.push(useNumbersList);
  }
  if (useSymbols) {
    characterOptions.push(useSymbolsList);
  }
  if (useLowerCase) {
    characterOptions.push(useLowerCaseList);
  }
  if (useUpperCase) {
    characterOptions.push(useUpperCaseList);
  }
  if (characterOptions.length === 0) {
    characterOptions.push(useSymbolsList);
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomLiist = getRandomItem(characterOptions);
    //console.log(randomLiist);
    var randomChar = getRandomItem(randomLiist);
    console.log(randomChar);
    generatedPassword += randomChar;
  }
  console.log(generatedPassword);
  return generatedPassword;
  // Write password to the #password input
}
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
