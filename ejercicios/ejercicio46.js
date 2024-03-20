function ejercicio46(){
    let numero1 = parseInt(prompt("Ingresa el numero 1"));
    let numero2 = parseInt(prompt("Ingresa el numero 2"));
    let numero3 = parseInt(prompt("Ingresa el numero 3"));

    if(numero1 > numero2 && numero1 > numero3){
        alert("Numero 1 mayor");
    }
    else if(numero2 > numero1 && numero2 > numero3){
        alert("Numero 2 mayor");
    }
    else if(numero3 > numero2 && numero3 > numero1){
        alert("Numero 1 mayor");
    }
    else{
        "Numeros iguales"
    }
}