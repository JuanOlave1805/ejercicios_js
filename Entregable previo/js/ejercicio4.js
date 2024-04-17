

// // Solicitar las palabras y almacenarlas en un arreglo
// for (let a = 0; a < cantidadPalabras; a++) {
//   let palabra = prompt("Ingresa la palabra:");
//   palabras.push(palabra);
// }

// // Función para encontrar la palabra más larga
// function encontrar_palabra_mayor(...palabras) {
//   let palabraMasLarga = "";
//   for (let palabra of palabras) {
//     if (palabra.length > palabraMasLarga.length) {
//       palabraMasLarga = palabra;
//     }
//   }
//   return palabraMasLarga;
// }

// // Encontrar la palabra más larga de entre las ingresadas
// let palabraMasLarga = encontrar_palabra_mayor(...palabras);

// // Mostrar la palabra más larga
// alert(`La palabra más larga ingresada es: ${palabraMasLarga}`);


// Definimos la función expresada 'ejercicio' que toma un número variable de palabras como argumentos
const ejercicio = function (...palabras) {

  let cantidadPalabras = parseInt(prompt("Ingresa la cantidad de palabras que se van a ingresar")); // Solicitamos al usuario que ingrese la cantidad de palabras que desea ingresar
  
  palabras = []; // Inicializamos un arreglo para almacenar las palabras ingresadas

  for (let a = 1; a <= cantidadPalabras; a++) { // Solicitamos al usuario que ingrese las palabras y las almacenamos en el arreglo 'palabras'
    let palabra = prompt("Ingresa la palabra");
    palabras.push(palabra);
  }

  let palabraConMasPeso = palabras[0]; // Inicializamos la variable 'palabraConMasPeso' con la primera palabra del array
  
  // Iteramos sobre el arreglo para encontrar la palabra con más "peso" en orden lexicográfico
  for (let i = 1; i < palabras.length; i++) {
    
    if (palabras[i].localeCompare(palabraConMasPeso) === 1) { // Comparamos la palabra actual con la palabra con más "peso" en orden lexicográfico
      palabraConMasPeso = palabras[i]; // Si la palabra actual tiene más "peso", la actualizamos
    }
  }

  alert(`Palabra con más peso: ${palabraConMasPeso}`); // Mostramos la palabra con más "peso" al usuario
};

//Funcion expresada
//Parametro rest