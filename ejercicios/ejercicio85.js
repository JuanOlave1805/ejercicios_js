function ejercicio85(){
  let cont = prompt("Escribe la cantidad de la serie de numeros");
  let numero=[];
  let suma = 0;
  for (let a = 0; a < cont; a++){
    numero[a] = prompt("Ingresa el numero");
    if (numero[a] > 0) {
      suma = numero[a]+++ suma;
    }
  }
  alert(`Resultado de la suma de los numeros positivos ingresados es: ${suma}`)
}