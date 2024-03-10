function ejercicio25(){
    let precio = parseInt(prompt("Ingresa el precio del producto sin descuento"));
    let descuento = parseInt(prompt("Ingresa el % del descuento"));

    let resultado = (precio * descuento)/100;
    let resultado2 = precio - resultado;
    alert(`El valor del producto con el descuento es: ${resultado2}`)
}