function ejercicio28(){
    let nombre = prompt("Ingresa tu nombre:");
    let horas = parseInt(prompt("Ingresa las horas laboradas"));
    let precio = parseInt(prompt("Ingresa el precio de la hora"));

    let resultado = horas * precio;
    alert(`${nombre}, tu paga por trabajar ${horas} horas es: ${resultado}`);
}