// Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.

function ejercicio3() {
  let divisor = parseInt(prompt("Ingresa el valor del divisor:"));
  let dividendo = parseInt(prompt("Ingresa el valor del dividendo"));
  let division;

  if (divisor == 0) {
    try {
      test()
    } catch (error) {
      alert("Ingresaste (0) en el valor del divisor");  
    }
  }
  else {
    division = dividendo / divisor;
    alert(`Resultado de la division: ${division}`); 
  }
}