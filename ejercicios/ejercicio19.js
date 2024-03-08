function ejercicio19() {
  let radio = prompt("Ingresa el valor del radio");
  let altura = prompt("Ingresa el valor de la altura");

  let volumen = Math.PI * (radio * radio) * altura;
  let area = (Math.PI * Math.PI) * radio * altura + (Math.PI * Math.PI) * (radio * radio);
  alert(`El area del cilindro es: ${area} y el volumen del cilindro es: ${volumen}`);
}