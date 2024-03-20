function ejercicio24(){
    let regex = /^[0-9]+([.])?([0-9]+)?$/;
    let numero = prompt("Ingresa el numero");

    if (regex.test(numero)) {
        alert(`${numero} es número de punto flotante`);
    } 
    else {
        alert("No es un número de punto flotante.");
    }
}