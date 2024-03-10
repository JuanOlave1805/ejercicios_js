function ejercicio8() {
  let puntuacion = parseInt(prompt("Ingresa la calificacion del año"));
  let empleado = prompt("Ingresa el nombre del empleado");
  
  if (puntuacion == 0.2 || puntuacion == 0.1 || puntuacion == 0.3 || puntuacion == 0.5) {
    alert("Puntuacion no valida");
  }
  else if (puntuacion == 0.0) {
    let resultado = (2400 * 0.0) + 2400;
    alert(`${empleado} recibe ${resultado} dolares por ser un empleado Inaceptable`);
  }
  else if (puntuacion == 0.4) {
    let resultado = (2400 * 0.4) + 2400;
    alert(`${empleado} recibe ${resultado} dolares por ser un empleado Aceptable`);
  }
  else if (puntuacion >= 0.6) {
    let resultado = (2400 * puntuacion) + 2400;
    alert(`${empleado} recibe ${resultado} dolares por ser un empleado Meritorio`);
  }
}