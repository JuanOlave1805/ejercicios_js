function ejercicio22() {
  let minutos = parseInt(prompt("Ingresa la cantidad de minutos"));
  let precio = parseInt(prompt("Ingresa el valor del minuto sin iva"));
  let iva = parseInt(prompt("Ingresa el valor de el iva"));

  let resultado1 = (precio * iva) / 100;
  let resultado2 = precio +++ resultado1;
  let resultado3 = resultado2 * minutos;
  alert(`El valor del iva es: ${resultado1}, el valor a pagar por minuto es: ${resultado2} y el valor total a pagar es: ${resultado3}`);
}