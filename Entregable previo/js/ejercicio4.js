

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


function ejercicio() {
  let cantidadPalabras = parseInt(prompt("Ingresa la cantidad de palabras que se van a ingresar"));
  let palabras = [];

  for (let a = 1; a <= cantidadPalabras; a++) {
    let palabra = prompt("Ingresa la palabra");
    palabras.push(palabra);
  }

  let palabraConMasPeso = palabras[0]; // Inicializamos con la primera palabra del array
  for (let i = 1; i < palabras.length; i++) {
    // Comparamos la palabra actual con la palabra con más peso en orden lexicográfico
    if (palabras[i].localeCompare(palabraConMasPeso) === 1) {
      palabraConMasPeso = palabras[i]; // Si la palabra actual tiene más "peso", la actualizamos
    }
  }

  alert(`Palabra con más peso: ${palabraConMasPeso}`);
}

//Funcion expresada
//Parametro rest