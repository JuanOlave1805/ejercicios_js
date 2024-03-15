function ejercicio83() {
  let contraseña = prompt("Ingresa el pin");
  regex = /^[0-9]{4,6}$/;
  let validacion = regex.test(contraseña);
  if (validacion === true) {
    alert("Contraseña valida");
  }
  else if((validacion === false)){
    alert("Contraseña no valida")
  }
}