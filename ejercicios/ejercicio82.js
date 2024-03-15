function ejercicio82() {
  let palabra = prompt("Ingresa la palabra:")
  let palabra_inversa = palabra => palabra.split("").reverse().join("");
  alert(`Palabra inversa: ${palabra_inversa(palabra)}`);

  //palabra.split("") divide la palabra en un array de caracteres.
  //reverse() invierte el orden de los elementos en el array.
  //join("") une los elementos del array en una sola cadena.
}