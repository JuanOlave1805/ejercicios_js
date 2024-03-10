function ejercicio18() {
  let a = parseInt(prompt("Ingresa el valor de a en la siguiente operacion ((a+7*c) / (b+2-a) + 2*b))"));
  let b = parseInt(prompt("Ingresa el valor de b en la siguiente operacion ((a+7*c) / (b+2-a) + 2*b))"));
  let c = parseInt(prompt("Ingresa el valor de c en la siguiente operacion ((a+7*c) / (b+2-a) + 2*b))"));

  resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
  alert(`El resultado de la ((a+7*c) / (b+2-a) + 2*b)) es: ${resultado}`);
}