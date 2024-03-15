
function contarSilabas(palabra) {
    palabra = palabra.toLowerCase().trim();  // Convertir la palabra a minúsculas y eliminar espacios en blanco
    let silabas = 0; // Contador de sílabas
    let enSilaba = false; // Variable booleana para verificar si se encuentra en una sílaba

    // Recorremos la palabra letra por letra
    for (let i = 0; i < palabra.length; i++) {
        // Verificamos si la letra actual es una vocal
        if (esVocal(palabra[i])) {
            // Si la letra actual es una vocal y no estamos ya en una sílaba, incrementamos el contador de sílabas
            if (!enSilaba) {
                silabas++;
                enSilaba = true;
            }
        } else {
            // Si la letra actual no es una vocal, marcamos que no estamos en una sílaba
            enSilaba = false;
        }
    }
    // Si no se encontraron sílabas, devolvemos 1
    return silabas === 0 ? 1 : silabas;
}

// Función para verificar si una letra es una vocal
function esVocal(letra) {
    return 'aeiouáéíóú'.indexOf(letra) !== -1;
}

// Función para imprimir el número de sílabas de una palabra en un alert
function imprimirNumeroSilabas(palabra) {
    alert(`La palabra "${palabra}" tiene ${contarSilabas(palabra)} sílabas.`);
}

// Ejemplo de uso
let palabra = prompt("Ingresa una palabra");
imprimirNumeroSilabas(palabra);