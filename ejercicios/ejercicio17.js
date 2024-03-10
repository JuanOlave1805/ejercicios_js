
function ejercicio17() {
  let radio = parseInt(prompt("Ingresa el valor del radio de la esfera"));

  let resultado = (4 / 3) * Math.PI * (radio * radio * radio);
  alert(`El valor del volumen de la esfera es: ${resultado} `);
}