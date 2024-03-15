function ejercicio75(){
    let numero1 = parseInt(prompt("Ingresa el numero 1"));
    let numero2 =   parseInt(prompt("Ingresa el numero 2"));

    if (numero1 > numero2){
        alert("Numero 1 mayor que numero 2");
    }
    else if (numero1 < numero2){
        alert("Numero 2 mayor que numero 1");
    }
    else{
        alert("Numero 1 y numero 2 iguales");
    }
}