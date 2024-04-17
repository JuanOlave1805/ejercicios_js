export function ejercicio1(tarjeta) {
  let regex_express = /^(34|37)[0-9]{13}$/;
  let regex_diners = /^(36|38|300|305)[0-9]{11,12}$/; 
  let regex_discover = /^6011[0-9]{12}$/;
  let regex_mastercard = /^(51|55)[0-9]{14}$/;
  let regex_visa = /^4[0-9]{15}$/;

  if (!/^\d+$/.test(tarjeta) || tarjeta.length > 16) {
    alert("ERROR: Tarjeta no válida. Ingrese solo números y máximo 16 caracteres.");
    return null;
  }

  if (regex_express.test(tarjeta)) {
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
    return null;
  }

  return tarjeta;
}
