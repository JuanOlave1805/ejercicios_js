function ejercicio28(){
    let nombre = prompt("Ingresa tu nombre:");
    let horas = prompt("Ingresa las horas laboradas");
    let precio = prompt("Ingresa el precio de la hora");

    let resultado = horas * precio;
    alert(`${nombre}, tu paga por trabajar ${horas} horas es: ${resultado}`);
}