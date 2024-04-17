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
  let resultado = 0;

  for (let a = 0; a < numeros.length; a++) {
    resultado += numeros[a];
  }

  alert(`Suma de los números: ${resultado}`);
}

export function contar_primos(numeros) {
  let primos = 0;

  for (let a = 0; a < numeros.length; a++) {
    let esPrimo = true;
    if (numeros[a] < 2) {
      esPrimo = false;
    } else {
      for (let i = 2; i <= Math.sqrt(numeros[a]); i++) {
        if (numeros[a] % i === 0) {
          esPrimo = false;
          break;
        }
      }
    }
    if (esPrimo) {
      primos++;
    }
  }

  alert(`Cantidad de números primos: ${primos}`);
}

export function contar_pares(numeros) {
  let pares = 0;

  for (let a = 0; a < numeros.length; a++) {
    if (numeros[a] % 2 === 0) {
      pares++;
    }
  }

  alert(`Cantidad de números pares: ${pares}`);
}

export function promedio_primos(numeros) {
  let primos = numeros.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });

  let resultado = primos.reduce((acc, cur) => acc + cur, 0);
  let resultado1 = primos.length > 0 ? resultado / primos.length : 0;

  alert(`Promedio de números primos: ${resultado1}`);
}

export function promedio_pares(numeros) {
  let pares = 0;
  let numero = 0;

  for (let a = 0; a < numeros.length; a++) {
    if (numeros[a] % 2 === 0) {
      pares++;
      numero += numeros[a];
    }
  }
  let resultado = numero / pares;

  alert(`Promedio de números pares: ${resultado}`);
}

//Comentar