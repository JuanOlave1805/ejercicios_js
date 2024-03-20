function ejercicio80() {
  resultado = []
  array1 = [];
  numero = prompt("Ingresa el numero de la tabla que quieres hacer");
  let tabla = "\n";

for (let a = 0; a <= 10; a++){
  if (a === 5) {
    tabla += "\n";
  }
  else {
    array1[a] = a;
    resultado[a] = array1[a] * numero; 
    tabla += `${numero} X ${array1[a]} = ${resultado[a]} \n`;
  }
}
alert(`Tabla del: ${numero} \n ${tabla}`);
}