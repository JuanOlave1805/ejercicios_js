function ejercicio87() {
  let cadena = prompt("Ingresa la cadena");

  let cadena_sin_vocales = cadena.replace(/[aáAÁeéEÉiíIÍoOóÓuúÚ]/gi, '');
  alert(`Cadena sin vocales: ${cadena_sin_vocales}`);
}

// [aáAÁeéEÉiíIÍoOóÓuúÚ]: Este es un conjunto de caracteres que incluye todas las vocales minúsculas y mayúsculas con tilde.

// /: Estas barras diagonales indican el principio y el final del patrón de expresión regular.

// g: Esta bandera significa global, lo que significa que reemplazará todas las coincidencias en la cadena, no solo la primera.

// i: Esta bandera significa que no distingue entre mayúsculas y minúsculas, lo que significa que coincidirá con caracteres tanto en minúsculas como en mayúsculas.

// En el método reemplazar(), este patrón de expresión regular se usa para eliminar las vocales de la cadena cadena y reemplazarlas con una cadena vacía ''. Luego el resultado se almacena en la variable cadena_sin_vocales.