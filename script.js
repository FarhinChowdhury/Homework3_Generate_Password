// Assignment Code
var generateBtn = document.querySelector("#generate");

function selectAttributres(){
  var ifUpper = confirm('Would you like Upper cases?')
  var ifLower = confirm('Would you like Lower cases?')
  var ifNum = confirm ('Would you like numbers?')
  var ifSpecial = confirm('Would you like special characters?')

  if (!ifUpper && !ifLower && !ifNum && !ifSpecial){
    alert('Must select atleast one attribue.')
  }else{
    return {ifUpper, ifLower, ifNum, ifSpecial}

  }
}
function generateCharacters(){
  var attribues = selectAttributres()
  var upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  var lower = ['abcdefghijklmnopqrstuvwxyz']
  var num =['1234567890']
  var special = ['!\'\"#$%&()*+,-./:<>=?@`|{}~\]']
  var valueSelected = ''

  if(attribues.ifUpper){
    valueSelected += upper
  }
  if(attribues.ifLower){
    valueSelected += lower
  }
  if (attribues.ifNum){
    valueSelected += num
  }
  if(attribues.ifSpecial){
    valueSelected += special
  }

  return valueSelected

  }

function generatePassword(){
  var values = generateCharacters()
  var passwordLength = prompt('How many characters long would you like your password to be?')
  var lenghtInt = parseInt(passwordLength)
  var characters = ''

  if (lenghtInt<8){
    alert('must be longer that 8 characters.')
  }else{
  
  for(var i = 0; i< lenghtInt;i++){
    characters += values[Math.floor(Math.random()*values.length)]
    }

  return(characters)
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

