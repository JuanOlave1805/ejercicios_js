function ejercicio55(){
    let membresia = prompt("Ingresa el tipo de membresia que tienes");
    let cobro = parseInt(prompt("Ingresa el valor de la venta"));

    if (membresia == "a" || membresia == "A"){
        let resultado = (cobro * 10) / 100;
        let resultado1 = cobro - resultado;
        alert(`Valor total a pagar ${resultado1} ya que tienes membresia ${membresia} lo cual te da un descuento de 10%`);
    }
    else if (membresia == "b" || membresia == "B"){
        let resultado = (cobro * 15) / 100;
        let resultado1 = cobro - resultado;
        alert(`Valor total a pagar ${resultado1} ya que tienes membresia ${membresia} lo cual te da un descuento de 15%`);
    }
    else if (membresia == "c" || membresia == "C"){
        let resultado = (cobro * 20) / 100;
        let resultado1 = cobro - resultado;
        alert(`Valor total a pagar ${resultado1} ya que tienes membresia ${membresia} lo cual te da un descuento de 20%`);
    }
    else{
        alert(`No tenes membresia, así que el valor a pagar es: ${cobro}`);
    }
}