// export function sumar(numeros) {
//   let numero = [];
//   let resultado = 0;

//   for (let a = 0; a < numeros; a++) {
//     numero[a] = parseInt(prompt("Ingresa el numero"));
//     resultado = resultado +++ numero[a];
//   }
//   alert(`Suma de los numeros ${resultado}`);
// }

// export function contar_primos(numeros) {
//   let primos = 0;
//   let numero = [];

//   for (let a = 0; a < numeros; a++) {
//     numero[a] = parseInt(prompt("Ingresa el numero"));
//     if (numero[a] % 2 === 0 || numero[a] % 3 === 0 || numero[a] % 5 === 0) {
//       primos+= 1;
//     }
//   }
//   alert(`Cantidad de numeros primos: ${primos}`);
// }

// export function contar_pares(numeros) {
//   let pares = 0;
//   let numero = [];

//   for (let a = 0; a < numeros; a++) {
//     numero[a] = parseInt(prompt("Ingresa el numero"));
//     if (numero[a] % 2 === 0) {
//       pares++;
//     }
//   }
//   alert(`Cantidad de numeros pares: ${pares}`);
// }

// export function promedio_primos(numeros) {
//   let primos = [];
//   let numero = [];
//   let resultado = 0;

//   for (let a = 0; a < numeros; a++) {
//     numero[a] = parseInt(prompt("Ingresa el numero"));
//     if (numero[a] % 2 === 0 || numero[a] % 3 === 0 || numero[a] % 5 === 0) {
//       primos[a] = numero[a];
//     }
//   }
//   for (let b = 0; b < primos.length; b++){
//     resultado = resultado +++ primos[b]
//   }
//   let resultado1 = resultado / primos.length;
//   alert(`Promedio numeros primos ${resultado1}`);
// }
// export function promedio_pares(numeros) {
//   let pares = [];
//   let numero = [];
//   let resultado = 0;

//   for (let a = 0; a < numeros; a++) {
//     numero[a] = parseInt(prompt("Ingresa el numero"));
//     if (numero[a] % 2 === 0){
//       pares[a] = numero[a];
//     }
//   }
//   for (let b = 0; b < primos.length; b++){
//     resultado = resultado +++ pares[b]
//   }
//   let resultado1 = resultado / pares.length;
//   alert(`Promedio numeros pares ${resultado1}`);
// }


export function sumar(numeros) {
  let resultado = 0; //Resultado inicia en cero

  for (let a = 0; a < numeros.length; a++) { //Inicia el blucle en el cual se suman los numeros que se van agregando
    resultado += numeros[a];
  }

  alert(`Suma de los números: ${resultado}`); //Muestra en pantalla el resultado mediante el alert
}

export function contar_primos(numeros) {
  let primos = 0; // Inicializamos una variable para contar la cantidad de números primos

  for (let a = 0; a < numeros.length; a++) { // Iteramos sobre cada número en el array 'numeros'
    
    let esPrimo = true; // Suponemos que el número actual es primo hasta que se demuestre lo contrario
    
    if (numeros[a] < 2) { // Si el número es menor que 2, no es primo
      esPrimo = false;
    }
    else {
      for (let i = 2; i <= Math.sqrt(numeros[a]); i++) { // Si el número es mayor o igual a 2, verificamos si es divisible por algún número entre 2 y su raíz cuadrada

        if (numeros[a] % i === 0) { // Si el número es divisible por 'i', no es primo
          esPrimo = false;
          
          break; // Salimos del bucle for porque ya no es necesario seguir comprobando
        }
      }
    }

    // Si 'esPrimo' sigue siendo true después de la verificación, incrementamos el contador de primos
    if (esPrimo) {
      primos++;
    }
  }

  alert(`Cantidad de números primos: ${primos}`); // Mostramos la cantidad de números primos encontrados
}

export function contar_pares(numeros) {
  let pares = 0; //Inicializamos el contador de pares

  for (let a = 0; a < numeros.length; a++) { //Iniciamos el ciclo for y recorremos el array hallando los pares del mismo
    if (numeros[a] % 2 === 0) { //Si el numero en el array es divisible entre 2 y da como reciduo 0 significa que es par y incrementara el contador de pares
      pares++;
    }
  }

  alert(`Cantidad de números pares: ${pares}`); //Muestra con el alert la cantida
}

export function promedio_primos(numeros) {
  let primos = 0; // Inicializamos una variable para contar la cantidad de números primos

  for (let a = 0; a < numeros.length; a++) { // Iteramos sobre cada número en el array 'numeros'
    
    let esPrimo = true; // Suponemos que el número actual es primo hasta que se demuestre lo contrario
    
    if (numeros[a] < 2) { // Si el número es menor que 2, no es primo
      esPrimo = false;
    }
    else {
      for (let i = 2; i <= Math.sqrt(numeros[a]); i++) { // Si el número es mayor o igual a 2, verificamos si es divisible por algún número entre 2 y su raíz cuadrada

        if (numeros[a] % i === 0) { // Si el número es divisible por 'i', no es primo
          esPrimo = false;
          
          break; // Salimos del bucle for porque ya no es necesario seguir comprobando
        }
      }
    }

    // Si 'esPrimo' sigue siendo true después de la verificación, incrementamos el contador de primos
    if (esPrimo) {
      primos++;
    }
  }

  
  let resultado = primos.reduce((acc, cur) => acc + cur, 0); // Calculamos la suma de todos los números primos en el array 'primos'

  let resultado1 = primos.length > 0 ? resultado / primos.length : 0; // Calculamos el promedio de los números primos, si hay al menos un número primo

alert(`Promedio de números primos: ${resultado1}`); // Mostramos el promedio de los números primos
}

export function promedio_pares(numeros) {
  let pares = 0; //Inicializamos el contador de pares
  let numero = 0; //Inicializamos el contador de la suma de los numeros del array

  for (let a = 0; a < numeros.length; a++) { //Inicializa el ciclo for en el cual recorre todo el array buscando los numeros pares
    if (numeros[a] % 2 === 0) { //Con esta condicional verificamos que sea par, mediante el residuo del numero del array que debe ser cero usando como divisior el 2
      pares++; //Incrementador de pares
      numero += numeros[a]; //suma de el numero par en la variable numero
    }
  }
  let resultado = numero / pares; //Declaramos una variables resultado en la cual realiza la operacion para hallar el promedio

  alert(`Promedio de números pares: ${resultado}`);  //Muestra por pantalla el resultado del promedio de los pares
}

//Comentar