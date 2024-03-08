// 7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
// el tipo de impositivo que le corresponde.

function ejercicio7() {
  let ingresos = prompt("Ingresa la renta anual:");
  let resultado;

  if (ingresos >= 10000 && ingresos <= 20000) { 
    resultado = (ingresos * 5) / 100;
    alert(`Pagas un 5% de renta anual lo cual equivale a: ${resultado}`)
  }
  else if (ingresos >= 20001 && ingresos <= 35000) {  
    resultado = (ingresos * 10) / 100;
    alert(`Pagas un 10% de renta anual lo cual equivale a: ${resultado}`)
  }
  else if (ingresos >= 35001 && ingresos <= 60000) {
    resultado = (ingresos * 20) / 100;
    alert(`Pagas un 20% de renta anual lo cual equivale a: ${resultado}`)
  }
  else if (ingresos >= 60001) {
  resultado = (ingresos * 45) / 100;
  alert(`Pagas un 45% de renta anual lo cual equivale a: ${resultado}`)
  }
}