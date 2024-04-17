import { calculadora } from '../js/module_ejercicio5.js';
let calcular = new calculadora();
let a = parseFloat(prompt("Ingresa el número 1"));
let b = parseFloat(prompt("Ingresa el número 2"));

if (isNaN(a) || isNaN(b)) {
  alert("Error: Debes ingresar números válidos.");
} else {
  let operacion = parseInt(prompt("Ingresa la operación que deseas realizar:\n1-Suma\n2-Resta\n3-División\n4-Multiplicación"));

  switch (operacion) {
    case 1:
      alert(`Resultado de la suma = ${calcular.suma(a, b)}`);
      break;
    case 2:
      alert(`Resultado de la resta = ${calcular.resta(a, b)}`);
      break;
    case 3:
      try {
        alert(`Resultado de la división = ${calcular.division(a, b)}`);
      } catch (error) {
        alert(error.message);
      }
      break;
    case 4:
      alert(`Resultado de la multiplicación = ${calcular.multiplicacion(a, b)}`);
      break;
    default:
      alert("Operación no válida. Por favor, elige una opción del 1 al 4.");
  }
}


//Arreglar el metodo para que sea una clase y no funcion por funcion