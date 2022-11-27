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

  // Lowercase Letters Prompt
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
  
  // Uppercase Letters Prompt
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

  // Numeric Characters Prompt
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

  // Special Characters Prompt
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

  // CHECK: at least one character type should be selected:
  if (lowercase === "N" && uppercase === "N" && numeric === "N" && special === "N") {
    window.alert("Alert! At least one character type must be selected. Please try again.")
    newprompts = givePrompts()
    length = newprompts[0], lowercase = newprompts[1], uppercase = newprompts[2], numeric = newprompts[3], special = newprompts[4]
  }

  return [length, lowercase, uppercase, numeric, special]
}

// Declaring Generate Password Function
function generatePassword(length, lowercase, uppercase, numeric, special ) {
  // Assemble user-selected character types into an array
  selected_chars = []
  lowercase_chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  uppercase_chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  numeric_chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  special_chars = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '[', '}', ']', "\\", '|', ';', ':', '<', '>', ',', '.', '?', '/' ]
  all_chars = [lowercase_chars, uppercase_chars, numeric_chars, special_chars]

  user_inputs = [lowercase, uppercase, numeric, special]
  for (var i = 0; i < user_inputs.length; i++) {
    if (user_inputs[i] == "Y"){
      selected_chars = selected_chars.concat(all_chars[i])
    }
  }

  // Randomly generate password of user-specified length based on selected characters
  var generated_password = ""
  
  for (var i = 0; i < length; i++) {
    generated_password += (selected_chars[Math.floor(Math.random()*(selected_chars.length - 1))])
  }

  return generated_password
}
