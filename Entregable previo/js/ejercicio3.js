// Definimos una función expresada llamada 'ordenarNumeros' que toma un número variable de argumentos
const ordenarNumeros = function (...numeros) {
  return numeros.sort((a, b) => b - a); // Utilizamos el método sort() para ordenar los números de mayor a menor
};

// Solicitamos al usuario que ingrese la cantidad de números que desea ingresar
let cantidadNumeros = parseInt(prompt("Escribe la cantidad de números"));

let numeros = []; // Inicializamos un arreglo para almacenar los números ingresados

for (let a = 0; a < cantidadNumeros; a++) { // Solicitamos los números y los almacenamos en el arreglo 'numeros'
  let numero = parseInt(prompt("Ingresa el número: "));
  numeros.push(numero);
}

console.table(ordenarNumeros(...numeros)); // Llamamos a la función 'ordenarNumeros' con los números ingresados como argumentos y mostramos el resultado en forma de tabla

//Arreglarlo con console.table
//Funcion expresada
//Falto definir parametro rest