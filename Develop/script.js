var bigLetters=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var smallLetters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols=['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', '}', ']', '\\', '|', '"', "'", ':', ';', '?', '/', '.', ',', '>', '<'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

//multiple vars listed
var passLength= "";
var passCapital;
var passLower;
var passNumbers;
var passSymbols;

//function for compiling choices
function generatePassword(){
    //How long password will be
    passLength=parseInt(window.prompt("How many characters would you like your password to be? Please pick a number between 8 and 123."));
    
    //if number selection is outside the range alert and return
    if (passLength < 8 || passLength > 123 || !passLength){
      window.alert("Please select a number between 8 and 123. Try again.");

      generatePassword();
    }
    else{
      alert("Your password will now be " + passLength + " characters long.");
    };
    
    //prompts for character choices
    passCapital=window.confirm("Do you want capital letters in your password? Click OK to confirm.");
    passLower=window.confirm("Do you want lower case letters in your password? Click OK to confirm.");
    passNumbers=window.confirm("Would you like numbers in your password? Click OK to confirm");
    passSymbols=window.confirm("Would you like your password to contain special characters? Click OK to confirm.");

    if (!passCapital && !passLower && !passNumbers && !passSymbols){
      alert("You must select at least one character type to include in your password. Please try again.");

      generatePassword(); 
    }

    var charList = [];

    if(passCapital){
      charList = charList.concat(bigLetters)
    }
    
    if(passLower){
      charList=charList.concat(smallLetters)
    }
    
    if(passNumbers){
      charList=charList.concat(numbers)
    }
    if(passSymbols){
      charList=charList.concat(symbols)
    }
      console.log(charList);

    var genPassword=[];

    for(var i=0; i < passLength; i++){
      var randomGenChar = charList[Math.floor(Math.random() * charList.length)];
      genPassword.push(randomGenChar);
      // debugger;
    }
    console.log(genPassword);

    
 
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




