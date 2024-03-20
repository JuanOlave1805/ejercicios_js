function ejercicio54(){
    let numero1 = parseInt(prompt("Ingresa el numero 1"));
    let numero2 = parseInt(prompt("Ingresa el numero 2"));

    if (numero1 > numero2){
        let resultado = numero1 - numero2;
        alert(`Resultado suma: ${resultado}`);
    }
    else{
        alert("Operacion imposible de realizar")
    }
}