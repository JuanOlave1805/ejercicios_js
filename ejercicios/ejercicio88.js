function ejercicio88() {
  let cant = prompt("Ingresa la cantidad de numeros: ");
  let numero = [];

  for (let a = 0; a < cant; a++){
    numero[a] = prompt("Ingresa el numero");
    numero[a] = -(numero[a]);
  }

  alert(`Numeros: ${numero}`);
}