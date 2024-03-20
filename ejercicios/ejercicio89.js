function ejercicio89() {
  let numero = parseInt(Math.random() * 11);
  if (numero % 2) {
    alert(`Numero negativo: ${numero}`);
  } else {
    alert(`Numero positivo: ${numero}`);
  }
}