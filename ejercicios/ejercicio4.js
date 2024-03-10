// 4. Escribir un programa que pida al usuario un numero entero y muestre por pantalla
// si es par o impar

function ejercicio4() {
  let numero = parseInt(prompt("Ingresa el numero"));

  if (numero % 2 == 0) {
    alert("Numero par");
  }
  else {
    alert("Numero impar");
  }
}
