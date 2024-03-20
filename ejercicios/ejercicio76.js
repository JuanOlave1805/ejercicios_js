function ejercicio76(){
    let numero = parseInt(prompt("Ingresa el numero"));

    if(numero % 2 === 0){
        let str = numero.toString();
        alert(`${numero} es par`);
    }
    else{
        let str = numero.toString();
        alert(`${numero} es impar`);
    }
}