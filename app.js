//! random values containers
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
var showPassword = document.querySelector(".show");
var hidePassword = document.querySelector(".hide");
display.value += "password";

//! show & hide password
showPassword.addEventListener("click", () => {
  display.type = "password";
  display.style.fontWeight = "bolder";
  showPassword.style.display = "none";
  hidePassword.style.display = "block";
});
hidePassword.addEventListener("click", () => {
  display.type = "text";
  display.style.fontWeight = "normal";
  showPassword.style.display = "block";
  hidePassword.style.display = "none";
});
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
  display.value = finalResult;
}
