function ejercicio21() {
  let altura = parseInt(prompt("Ingresa la altura del elipsoide"));
  let largo = parseInt(prompt("Ingresa lo largo del elipsoide"));
  let ancho = parseInt(prompt("Ingresa lo ancho del elipsoide"));

  let volumen = (4 * Math.PI / 3) * altura * largo * ancho;
  alert(`El valor del volumen del elipsoide es: ${volumen} m3`);
}