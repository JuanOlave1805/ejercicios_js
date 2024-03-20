function ejercicio50(){
    let temperatura = parseInt(prompt("Ingresa el valor de la temperatura"));
    let presion = parseInt(prompt("Ingresa el valor de la presion"));

    if (temperatura > 100 || presion > 200){
        alert("Alarma");
    }
    else{
        alert("Normal");
    }
}