// import {sumar, contar_pares, contar_primos, promedio_pares, promedio_primos} from './module_ejercicio2.js';




// let accion = prompt("Ingresa que quieres hacer:\n 1- Sumar \n 2- Contar primos \n 3- Contar pares \n 4- Calcular promedio de primos \n 5- Calcular promedio de pares");

// if (accion == 1) {
//   let numeros = prompt("Ingresa el numero de veces que ingresara el numero");
//   sumar(numeros);
// }
// else if (accion == 2) {
//   let numeros = prompt("Ingresa el numero de veces que ingresara el numero");
//   contar_primos(numeros);
// }
// else if (accion == 3) {
//   let numeros = prompt("Ingresa el numero de veces que ingresara el numero");
//   contar_pares(numeros);
// }
// if (accion == 4) {
//   let numeros = prompt("Ingresa el numero de veces que ingresara el numero");
//   promedio_primos(numeros);
// }
// else if (accion == 5) {
//   let numeros = prompt("Ingresa el numero de veces que ingresara el numero");
//   promedio_pares(numeros);
// }

import { sumar, contar_pares, contar_primos, promedio_pares, promedio_primos } from './module_ejercicio2.js';

let accion = prompt("Ingresa qué quieres hacer:\n 1- Sumar \n 2- Contar primos \n 3- Contar pares \n 4- Calcular promedio de primos \n 5- Calcular promedio de pares");

if (accion == 1) {
  let numeros = [];
  let cantidad = parseInt(prompt("Ingresa el número de veces que ingresarás el número")); //cantidad de numeros que llevara el array
  for (let i = 0; i < cantidad; i++) {
    numeros.push(parseInt(prompt("Ingresa el número"))); //Mediante el metodo push agregamos el numero en el array
  }
  sumar(numeros); // Llamamos a la función 'sumar' y le pasamos el array 'numeros' como argumento
} else if (accion == 2) {
  let numeros = [];
  let cantidad = parseInt(prompt("Ingresa el número de veces que ingresarás el número")); //cantidad de numeros que llevara el array
  for (let i = 0; i < cantidad; i++) {
    numeros.push(parseInt(prompt("Ingresa el número"))); //Mediante el metodo push agregamos el numero en el array
  }
  contar_primos(numeros); // Llamamos a la función 'contar_primos' y le pasamos el array 'numeros' como argumento
} else if (accion == 3) {
  let numeros = [];
  let cantidad = parseInt(prompt("Ingresa el número de veces que ingresarás el número")); //cantidad de numeros que llevara el array
  for (let i = 0; i < cantidad; i++) {
    numeros.push(parseInt(prompt("Ingresa el número"))); //Mediante el metodo push agregamos el numero en el array
  }
  contar_pares(numeros); // Llamamos a la función 'contar_pares' y le pasamos el array 'numeros' como argumento
} else if (accion == 4) {
  let numeros = [];
  let cantidad = parseInt(prompt("Ingresa el número de veces que ingresarás el número")); //cantidad de numeros que llevara el array
  for (let i = 0; i < cantidad; i++) {
    numeros.push(parseInt(prompt("Ingresa el número"))); //Mediante el metodo push agregamos el numero en el array
  }
  promedio_primos(numeros); // Llamamos a la función 'promedio_primos' y le pasamos el array 'numeros' como argumento
} else if (accion == 5) {
  let numeros = [];
  let cantidad = parseInt(prompt("Ingresa el número de veces que ingresarás el número")); //cantidad de numeros que llevara el array
  for (let i = 0; i < cantidad; i++) {
    numeros.push(parseInt(prompt("Ingresa el número"))); //Mediante el metodo push agregamos el numero en el array
  }
  promedio_pares(numeros); // Llamamos a la función 'promedio_pares' y le pasamos el array 'numeros' como argumento
}