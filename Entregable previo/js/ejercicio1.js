import { regex_express } from './module_ejercicio1.js';
import { regex_diners } from './module_ejercicio1.js';
import { regex_discover } from './module_ejercicio1.js';
import { regex_mastercard } from './module_ejercicio1.js';
import { regex_visa } from './module_ejercicio1.js';

for (let a = 1; a<=3; a++){
  let tarjeta = prompt("Ingresa la tarjeta, tienes 3 intentos");

  if (!/^\d+$/.test(tarjeta) || tarjeta.length > 16) {
    alert("ERROR: Tarjeta no válida. Ingrese solo números y máximo 16 caracteres.");
  }
  if (tarjeta === 0) {
    break;
  }
  else if (regex_express.test(tarjeta)) {
    alert("Tarjeta válida: American Express");
  } else if (regex_diners.test(tarjeta)) {
    alert("Tarjeta válida: Diners Club");
  } else if (regex_discover.test(tarjeta)) {
    alert("Tarjeta válida: Discover");
  } else if (regex_mastercard.test(tarjeta)) {
    alert("Tarjeta válida: Mastercard");
  } else if (regex_visa.test(tarjeta)) {
    alert("Tarjeta válida: Visa");
  } else {
    alert("ERROR: Tarjeta no reconocida.");
  }
}
//Pedir de nuevo la tarjeta


