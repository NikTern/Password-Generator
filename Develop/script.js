// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var runprompts = givePrompts()
  var password = generatePassword(runprompts[0], runprompts[1]);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// PROMPT SEQUENCE (activated by button)
// each prompt is a checkbox which users select y/n (for character types it will be a list and users need to select at least 1 character type)

// Declaring Prompt Function
function givePrompts() {
  // Length Prompt
  var length = window.prompt("How many characters long would you like your password to be?")
  length = Number(length)

  while (length > 128 || length < 8 || isNaN(length)){
    window.alert("Invalid length. Please enter a whole number from 8-128.")
    var length = window.prompt("What length would you like your password to be?")
    length = Number(length)
  }

  var chartypes = window.prompt("What character types?")
  return [length, chartypes]
}


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected







// Declaring Generate Password Function
function generatePassword(length_input, chartypes) {
  if (length_input > 5) {
    if (chartypes == "panda") {
      return length_input*100 + 2
    }
    else {
      return length_input*100
    }
  }
  else {
    return "password output"
  }
}
