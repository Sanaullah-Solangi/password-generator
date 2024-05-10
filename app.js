var log = console.log;
//! random values containers
var ranValue =
  "!@#$%^&*()_+-={}[];:',.<>/?|0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
display.innerHTML = "password";
//! funtion to generate password

function ranPassword() {
  var result = "";
  var finalResult = "";
  rangeNum.innerHTML = range.value;
  result = capAlpha + smallAlpha;
  if (numbersCheckBox.checked && !symbolsCheckBox.checked) {
    result += numbers;
  } else if (symbolsCheckBox.checked && !numbersCheckBox.checked) {
    result += specChar;
  } else if (numbersCheckBox.checked && symbolsCheckBox.checked) {
    result += numbers + specChar;
  }
  for (var i = 0; i < range.value; i++) {
    finalResult += result[Math.round(Math.random() * result.length - 1)];
  }
  display.innerHTML = finalResult;
  console.log(finalResult);
}
