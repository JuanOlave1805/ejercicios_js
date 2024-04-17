function ejercicio32(){
    let producto1 = parseInt(prompt("Ingresa el valor del producto"));
    let producto2 = parseInt(prompt("Ingresa el valor del producto"));
    let producto3 = parseInt(prompt("Ingresa el valor del producto"));
    let producto4 = parseInt(prompt("Ingresa el valor del producto"));
    let producto5 = parseInt(prompt("Ingresa el valor del producto"));
    let descuento = parseInt(prompt("Ingresa el valor del descuento de los primeros 3 productos"));
    let descuento2 = parseInt(prompt("Ingresa el valor del descuento de los ultimos 2 productos"));


    let resultado = (producto1 * descuento)/100;
    let resultado1 = producto1 - resultado;//
    let resultado2 = (producto2 * descuento)/100;
    let resultado3 = producto2 - resultado2;//
    let resultado4 = (producto3 * descuento)/100;
    let resultado5 = producto3 - resultado4;//
    let resultado6 = (producto4 * descuento2)/100;
    let resultado7 = producto4 - resultado6;//
    let resultado8 = (producto5 * descuento2)/100;
    let resultado9 = producto5 - resultado8;//
    let total = resultado1 + resultado3 + resultado5 + resultado7 + resultado9;
    
    alert(`Descuento primeros 3 productos: ${descuento},Descuento ultimos 2 productos: ${descuento2}, Producto 1: ${resultado1}, Producto 2: ${resultado3}, Producto 3: ${resultado5}, Producto 4: ${resultado7}, Producto 5: ${resultado9}. Total a pagar ${total}`)
}