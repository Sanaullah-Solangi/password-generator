var log = console.log;
//! random values containers
// var ranValue =
//   "!@#$%^&*()_+-={}[];:',.<>/?|0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!@#$%^&*()_+-={}[];:',.<>/?|";
var numbers = "0123456789";
var smallAlpha = "abcdefghijklmnopqrstuvwxyz";
var capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//! getting html values
var range = document.querySelector("#range");
var display = document.querySelector("#display");
var rangeNum = document.querySelector(".rangeNum");
var numbersCheckBox = document.querySelector("#numbers");
var symbolsCheckBox = document.querySelector("#symbols");
var smallLettersCheckBox = document.querySelector("#smallLetters");
display.innerHTML = "password";
//! funtion to generate password

function ranPassword() {
  var result = "";
  var finalResult = "";
  rangeNum.innerHTML = range.value;
  result = capAlpha;
  //? conditional statements
  if (
    smallLettersCheckBox.checked &&
    numbersCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    console.log("smallAlpha, numbers and specChar");
    result += smallAlpha + numbers + specChar;
  } else if (
    smallLettersCheckBox.checked &&
    numbersCheckBox.checked &&
    !symbolsCheckBox.checked
  ) {
    console.log("smallAlpha, numbers");
    result += smallAlpha + numbers;
  } else if (
    smallLettersCheckBox.checked &&
    !numbersCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    console.log("smallAlpha and specChar");
    result += smallAlpha + specChar;
  } else if (
    !smallLettersCheckBox.checked &&
    numbersCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    console.log("numbers and specChar");
    result += numbers + specChar;
  } else if (
    !smallLettersCheckBox.checked &&
    !numbersCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    console.log("specChar");
    result += specChar;
  } else if (
    !smallLettersCheckBox.checked &&
    numbersCheckBox.checked &&
    !symbolsCheckBox.checked
  ) {
    console.log("numbers");
    result += numbers;
  } else if (
    smallLettersCheckBox.checked &&
    !numbersCheckBox.checked &&
    !symbolsCheckBox.checked
  ) {
    console.log("smallAlpha");
    result += smallAlpha;
  }
  //? generating password by loop
  for (var i = 0; i < range.value; i++) {
    finalResult += result[Math.ceil(Math.random() * result.length - 1)];
  }
  display.innerHTML = finalResult;
  // console.log(finalResult);
}
