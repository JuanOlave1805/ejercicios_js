function ejercicio51(){
    let consumo = parseFloat(prompt("Ingresa el valor del consumo"));

    if(consumo >= 130.000){
        let resultado1 = (consumo * 15) / 100;
        let resultado2 = consumo - resultado1;
        alert(`El valor del consumo por ser mayor a 130.000 tiene descuento del 13% por lo tanto el valor a pagar es: ${resultado2}`);
    }
    else{
        alert(`Total a pagar: ${consumo}`);
    }
}