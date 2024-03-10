function ejercicio45(){
    let numero = parseInt(prompt("Ingresa el numero"));

    if (numero > 0 && numero < 100){
        alert("Numero positivo y menor que 100");
    }
    else if(numero > 0){
        alert("Numero positivo pero mayor a 100");
    }
    else{
        alert("Numero negativo");
    }
}