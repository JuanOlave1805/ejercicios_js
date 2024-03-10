function ejercicio71(){
    let numero = parseInt(prompt("Ingresa el numero que averiguaras si es primo"));
    let esPrimo = true;
    for (var a = 2; a < numero; a++){
        if(numero % a === 0){
            esPrimo = false;
            break; // Detener el bucle cuando se encuentra un divisor
        }
    }
    if (esPrimo && numero !== 1) {
        alert("Es numero primo");
    } else {
        alert("No es numero primo");
    }
}
