let cantidadNumeros = parseInt(prompt("Escribe la cantidad de números"));
let numeros = [];

// Solicitar los números y almacenarlos en un arreglo
for (let a = 0; a < cantidadNumeros; a++) {
  let numero = parseInt(prompt("Ingresa el número: "));
  numeros.push(numero);
}

// Función para ordenar los números de mayor a menor
function ordenMayorMenor(...numeros) {
  return numeros.sort((a, b) => b - a);
}

// Ordenar los números ingresados de mayor a menor
let numerosOrdenados = ordenMayorMenor(...numeros);

alert(`Números ordenados de mayor a menor: ${numerosOrdenados}`);