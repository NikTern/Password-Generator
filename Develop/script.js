// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var runprompts = givePrompts()
  var password = generatePassword(runprompts[0], runprompts[1], runprompts[2], runprompts[3], runprompts[4]);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Declaring Prompt Function
function givePrompts() {
  // Specify Length Prompt
  var length = window.prompt("How many characters long would you like your password to be?")
  length = Number(length)

  while (length > 128 || length < 8 || isNaN(length)){
    window.alert("Invalid length. Please enter a whole number from 8-128.")
    var length = window.prompt("What length would you like your password to be?")
    length = Number(length)
  }

  window.alert(`Success! Your password will be ${length} characters long.`)

  // Initiate Character Type Selection Prompts
  window.alert("Select character types to include in password.")

  // Allow Lowercase Letters Prompt
  var lowercase = window.prompt("Would you like your password to include *lowercase* characters? Respond Y/N:")
  lowercase = lowercase.toUpperCase()

  while (lowercase != "Y" && lowercase != "N") {
    window.alert("Invalid answer. Please respond with Y for yes or N for no.")
    var lowercase = window.prompt("Would you like your password to include *lowercase* characters? Respond Y/N:")
    lowercase = lowercase.toUpperCase()
  }

  if (lowercase == "Y") {
    window.alert("Got it! Your password will include lowercase letters.")
  }
  else {
    window.alert("Got it! Your password will not include lowercase letters.")
  }
  
  // Allow Uppercase Letters Prompt
  var uppercase = window.prompt("Would you like your password to include UPPERCASE characters? Respond Y/N:")
  uppercase = uppercase.toUpperCase()

  while (uppercase != "Y" && uppercase != "N") {
    window.alert("Invalid answer. Please respond with Y for yes or N for no.")
    var uppercase = window.prompt("Would you like your password to include UPPERCASE characters? Respond Y/N:")
    uppercase = uppercase.toUpperCase()
  }

  if (uppercase == "Y") {
    window.alert("Got it! Your password will include uppercase letters.")
  }
  else {
    window.alert("Got it! Your password will NOT include uppercase letters.")
  }

  // Allow Numeric Characters Prompt
  var numeric = window.prompt("Would you like your password to include numeric characters? Respond Y/N:")
  numeric = numeric.toUpperCase()  

  while (numeric != "Y" && numeric != "N") {
    window.alert("Invalid answer. Please respond with Y for yes or N for no.")
    var numeric = window.prompt("Would you like your password to include numeric characters? Respond Y/N:")
    numeric = numeric.toUpperCase()
  }

  if (numeric == "Y") {
    window.alert("Got it! Your password will include numeric characters.")
  }
  else {
    window.alert("Got it! Your password will NOT include numeric characters.")
  }

  // Allow Special Characters Prompt
  var special = window.prompt("Would you like your password to include special characters? Respond Y/N:")
  special = special.toUpperCase()  

  while (special != "Y" && special != "N") {
    window.alert("Invalid answer. Please respond with Y for yes or N for no.")
    var special = window.prompt("Would you like your password to include special characters? Respond Y/N:")
    special = special.toUpperCase()
  }

  if (special == "Y") {
    window.alert("Got it! Your password will include special characters.")
  }
  else {
    window.alert("Got it! Your password will NOT include special characters.")
  }

  console.log([length, lowercase, uppercase, numeric, special])
  return [length, lowercase, uppercase, numeric, special]
}


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include , numeric, and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated AND at least one character type should be selected







// Declaring Generate Password Function
function generatePassword(length_input, lowercase, uppercase, numeric, special ) {
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
