// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
// al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
// tributar o no.
function ejercicio5() {
  let edad = prompt("Ingresa tu edad:");
  

  if (edad >= 16) {
    let ingresos = prompt("Ingresa los ingresos que tienes al mes:");
    if (ingresos >= 1000) {
      alert("El usuario debe tributar");
    }
    else {
      alert("El usuario no debe tributar");
    }
  }
  else {
    alert("El usuario es menor de edad por lo tanto no tiene que tributar");
  }
}
