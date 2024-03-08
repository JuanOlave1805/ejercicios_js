function ejercicio20() {
  let a = prompt("Ingresa el valor de a en la ecuacion: (a * x2 + b + x + c), siendo X un valor constante la cual es 1");
  let b = prompt("Ingresa el valor de b en la ecuacion: (a * x2 + b + x + c), siendo X un valor constante la cual es 1");
  let c = prompt("Ingresa el valor de c en la ecuacion: (a * x2 + b + x + c), siendo X un valor constante la cual es 1");
  const x = 1;

  let resultado = a * (x * x) + b + x + c;
  alert(`El resultado de la ecuacion es: ${resultado}`);
}