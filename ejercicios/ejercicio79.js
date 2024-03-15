function contarSilabas(palabra) {
  palabra = palabra.toLowerCase().trim();  //Vuelve la palabra en minuscula y elimina espacios.
  let silabas = 0; //Contador de silabas, inicia en cero.
  let enSilaba = false; // Valor true o false para saber si la palabra en el bucle es silaba o no.

  for (let i = 0; i < palabra.length; i++) {  // Realiza el bucle en el que lee cada letra de la palabra.
    const letra = palabra[i];
    if ('aeiou'.includes(letra)) { //Realiza la condicion si la letra es una vocal
      if (!enSilaba) {  //Realiza una condicion la cual evalua que enSilaba sea false y si se cumple incrementa el valor de las silabas y cambia enSilaba a verdadero hasta que vuelva a hacer el bucle de la siguiente letra
        silabas++;
        enSilaba = true;
      }
    } else { //Si enSilaba es verdadero se cambia a false
      enSilaba = false;
    }
  }
  return silabas;
}

//Funcion la cual imprime el numero de las silabas
function imprimirNumeroSilabas() {
  const palabra = prompt("Ingresa una palabra"); //Pide la palabra a evaluar
  alert(`La palabra "${palabra}" tiene ${contarSilabas(palabra)} sílabas.`);
}





function silabas(palabra){
  // Declarar una variable constante `vocales` y asignarle la cadena de vocales
  const vocales = "aeiou";
  
  // Divida la palabra de entrada en caracteres individuales y cree una matriz de caracteres
  const silabas = palabra.split("")
    // Filtrar la matriz de caracteres para incluir solo los caracteres que son vocales
    .filter(char => vocales.includes(char))
    // Devuelve la longitud de la matriz filtrada, que es el número de sílabas de la palabra.
    .length;
  // Print the result in the console
  console.log(`${palabra} tiene ${silabas} silabas`)
}


// Expresión regular para contar sílabas en una palabra
// La expresión regular busca grupos de una vocal ([aeiou]) seguida opcionalmente de otra vocal ([aeiouy]?)
// y asegurándose de que no hay otra vocal después (?![aeiou])
// La bandera 'g' permite buscar todas las ocurrencias en la cadena
const contar_silabas = /([aeiou])(?:[aeiouy]?)(?![aeiou])/g;