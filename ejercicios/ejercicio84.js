function ejercicio84() {
  let altura = prompt("Ingresa el tamaño de la piramide");


  if (!isNaN(altura) && altura > 0) {
    let resultado = "";

    for (let i = 1; i <= altura; i++) {

      let linea = "";
      for (let j = 1; j <= i; j++) {
        linea += "*";
      }
      resultado += linea + "\n";
    }

    alert(`Altura de la piramide: \n ${resultado} `);
  } else {
    alert("Por favor, ingrese un número entero positivo.");
  }
}