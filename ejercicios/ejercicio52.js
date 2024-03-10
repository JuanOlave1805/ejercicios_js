function ejercicio52(){
    let horas = parseInt(prompt("Ingresa el valor de horas trabajadas"));
    let empleado = prompt("Ingresa el rol del empleado");

    if (empleado === empleado.charAt(p) || empleado === empleado.charAt(P)){
        let resultado = 20000 * horas;
        alert(`Eres de de planta por lo cual cada hora de trabajo tuya vale 20000 y el pago por tus horas trabajadas es: ${resultado}`);
    }
    else if (empleado === empleado.charAt(a) || empleado === empleado.charAt(A)){
        let resultado = 10000 * horas;
        alert(`Eres administrativo por lo cual cada hora de trabajo tuya vale 10000 y el pago por tus horas trabajadas es: ${resultado}`);
    }
}