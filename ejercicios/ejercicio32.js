function ejercicio32(){
    let producto1 = prompt("Ingresa el valor del producto");
    let producto2 = prompt("Ingresa el valor del producto");
    let producto3 = prompt("Ingresa el valor del producto");
    let producto4 = prompt("Ingresa el valor del producto");
    let producto5 = prompt("Ingresa el valor del producto");
    let descuentos = prompt("Ingresa el valor del descuento de los primeros 3 productos");
    let descuentos2 = prompt("Ingresa el valor del descuento de los ultimos 2 productos");


    let resultado = (producto1 * descuento)/100;
    let resultado1 = precio - resultado;//
    let resultado2 = (producto2 * descuento)/100;
    let resultado3 = precio - resultado;//
    let resultado4 = (producto3 * descuento)/100;
    let resultado5 = precio - resultado;//
    let resultado6 = (producto3 * descuento2)/100;
    let resultado7 = precio - resultado;//
    let resultado8 = (producto3 * descuento2)/100;
    let resultado9 = precio - resultado;//
    let total = resultado1 + resultado3 + resultado5 + resultado7 + resultado9;
    
    alert(`Descuento primeros 3 productos: ${descuentos},Descuento ultimos 2 productos: ${descuentos2}, Producto 1: ${resultado1}, Producto 2: ${resultado3}, Producto 3: ${resultado5}, Producto 4: ${resultado7}, Producto 5: ${resultado9}. Total a pagar ${total}`)
}