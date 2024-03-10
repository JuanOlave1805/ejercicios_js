// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
// mayor o menor de edad, el programa debe validar que solo se puedan ingresar
// números positivos.

function ejercicio1() {
  let edad = parseInt(prompt("Cual es tu edad: "));
  if (edad >= 18 && edad > 0) {
    alert(`Eres mayor de edad con: ${edad} años`);
  }
  else if (edad < 18 && edad > 0) {
    alert(`Eres menor de edad con: ${edad} años`);
  } 
  else {
    alert("Ingresaste una edad con numero negativo por lo tanto tienes que volver a ingresar la edad ");
    edad = prompt("Cual es tu edad: ");
  }
}

