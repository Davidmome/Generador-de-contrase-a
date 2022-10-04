// Código de asignación
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max){
    max - min;
    min = 0
  }
  var numero = Math.random()
  return Math.floor (min*(1 - numero) + numero*max);
}

function getRandomItem(lista){
  return lista[randomInt(lista.length)]
}

function generatePassword(){
  var input = window.prompt("De cuantos caracteres debe ser tu contraseña?");
  var legnth = parseInt(input);
  if (legnth < 8 || legnth > 128){
    window.alert("La contraseña debe tener almenos entre 8-128 caracteres");
    return;
  }

  if (isNaN(legnth)){
    window.alert('Escribe un numero');
    return;

  }

  var numeros = window.confirm ('La contraseña debe de tener numeros?');
  var simbolos = window.confirm('La contraseña debe de tener simbolos?');
  var minusculas = window.confirm ('La contraseña debe de tener minusculas?');
  var mayusculas = window.confirm ('La contraseña debe de tener mayusculas?');

  var listadenumeros = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  var listasimbolos = [ ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '^', '`', ];
  var listaminusculas = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var listamayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var listadeopciones = [];
  
  if (numeros === true){
    listadeopciones.push(listadenumeros);
  }

  if (simbolos === true){
    listadeopciones.push(listasimbolos);
  }

  if (minusculas === true){
    listadeopciones.push(listaminusculas);
  }

  if (mayusculas === true){
    listadeopciones.push(listamayusculas);
  }
if (listadeopciones.legnth === 0){
  listadeopciones.push(listadenumeros);
}

  var generarpassword = '';

  for (var i = 0; i < length; i++){
    var generarrandom = getRandomItem(listadeopciones);
    var randomcarac = getRandomItem(generarrandom);

    generarpassword += randomcarac;
  }

return generarpassword;
}

// Escriba la contraseña en la entrada #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Agregar oyente de eventos para generar el botón
generateBtn.addEventListener("click", writePassword);
