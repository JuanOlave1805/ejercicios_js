function ejercicio21() {
  let altura = prompt("Ingresa la altura del elipsoide");
  let largo = prompt("Ingresa lo largo del elipsoide");
  let ancho = prompt("Ingresa lo ancho del elipsoide");

  let volumen = (4 * Math.PI / 3) * altura * largo * ancho;
  alert(`El valor del volumen del elipsoide es: ${volumen} m3`);
}