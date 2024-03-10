// 9. Escribir un programa para una empresa que tiene salas de juegos para todas las
// edades y quiere calcular de forma automática el precio que debe cobrar a sus
// clientes por entrar. El programa debe preguntar al usuario la edad del cliente y
// mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar
// gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.

function ejercicio9() {
  let edad = parseInt(prompt("Ingresa la edad del cliente"));

  if (edad < 4) {
    alert("Ingresas gratis por ser menor a 4 años");
  }
  else if (edad >=4 && edad <= 18) {
    alert("Debes pagar 5 dolares por ser mayor de 4 años y menor de 18");
  }
  else {
    alert("Debes pagar 10 dolares por se mayor de 18 años");
  }
}
