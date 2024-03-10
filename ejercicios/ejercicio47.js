function ejercicio47(){
    let numero1 = parseInt(prompt("Ingresa el numero 1"));
    let numero2 = parseInt(prompt("Ingresa el numero 2"));
    let numero3 = parseInt(prompt("Ingresa el numero 3"));

    if(numero1 > numero2 && numero1 > numero3){
        alert("Numero 1 mayor");
        if(numero2 > numero3){
            alert("Numero 3 menor")
        }
        else if(numero3 > numero2){
            alert("Numero 2 menor")
        }
        else{
            alert("Numero 2 y numero 3 iguales")
        }
    }
    else if(numero2 > numero1 && numero2 > numero3){
        alert("Numero 2 mayor");
        if(numero1 > numero3){
            alert("Numero 3 menor")
        }
        else if(numero3 > numero1){
            alert("Numero 1 menor")
        }
        else{
            alert("Numero 1 y numero 3 iguales")
        }
    }
    else if(numero3 > numero2 && numero3 > numero1){
        alert("Numero 3 mayor");
        if(numero1 > numero2){
            alert("Numero 2 menor")
        }
        else if(numero2 > numero1){
            alert("Numero 1 menor")
        }
        else{
            alert("Numero 1 y numero 2 iguales")
        }
    }
    else{
        "Numeros iguales"
    }
}