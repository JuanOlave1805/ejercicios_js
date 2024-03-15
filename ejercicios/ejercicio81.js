function ejercicio81() {
  let tam = prompt("Ingresa el tamaño del arreglo");
  let mayor = 0;
  let array = [];

  for (let a = 0; a < tam; a++){
    array[a] = prompt("Ingresa un numero");
    if (array[a] > mayor) {
      mayor = array[a];
    }
  }
  
  alert(`Numero mayor: ${mayor}`);
}