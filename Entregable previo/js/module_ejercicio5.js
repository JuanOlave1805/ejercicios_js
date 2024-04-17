export class calculadora {
  suma(a, b) {
  return a + b;
}

resta(a, b) {
  return a - b;
}

multiplicacion(a, b) {
  return a * b;
}

division(a, b) {
  if (b === 0) {
    throw new Error("Error: No se puede dividir por cero.");
  }
  return a / b;
}
}
export default calculadora;