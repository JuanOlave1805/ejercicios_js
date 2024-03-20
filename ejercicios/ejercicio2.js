// 2. escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos.

function ejercicio2() {
  let contraseña = prompt("Ingrese la contraseña");
  let contraseña_val;
  let regex;
  function validar(contraseña) {
    regex = new RegExp('^[A-Z]+$', 'i');
    if (regex.test(contraseña)) {
      alert("Contraseña valida");
      contraseña_val = prompt("Ingresa la contraseña en rol de usuario")
        if (contraseña === contraseña_val) {
          alert("Contraseña Correcta");
        }
        else {
          alert("Contraseña incorrecta");
        }
    }
    else {
        alert("Contraseña no valida por llevar numeros");
    }
}
validar(contraseña);
}



