function ejercicio16() {
  let distancia = prompt("Ingresa la distancia del proyectil:");
  let tiempo = prompt("Ingresa el tiempo que demoro el proyectil en minutos:");

  let resultado1 = tiempo / 60;
  let resultado2 = distancia / resultado1;
  let resultado3 = resultado2 / 3.6;
  alert(`La velocidad que llevaba el proyectil es de: ${resultado3} m/s`);
}