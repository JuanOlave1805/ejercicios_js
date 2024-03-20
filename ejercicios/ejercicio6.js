// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde.

function ejercicio6() {
  let nombre = prompt("Ingresa tu nombre");
  let sexo = prompt("Ingresa tu sexo");

  if (nombre.charAt(0) <= "m" && sexo.charAt(0) == "f"  || nombre.charAt(0) > "n" && sexo.charAt(0) == "m"){
    alert(`${nombre} pertenece al grupo A`);
  }
  else {
    alert(`${nombre} pertenece al grupo B`);
  }
}
