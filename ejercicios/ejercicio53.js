function ejercicio53(){
    let producto1 = parseInt(prompt("Ingresa el valor del producto 1"));
    let producto2 = parseInt(prompt("Ingresa el valor del producto 2"));
    let producto3 = parseInt(prompt("Ingresa el valor del producto 3"));
    let producto4 = parseInt(prompt("Ingresa el valor del producto 4"));
    let producto5 = parseInt(prompt("Ingresa el valor del producto 5"));
    let iva = parseInt(prompt("Ingresa el valor de % de iva"));

    let resultado1 = (producto1 * iva) / 100;
    let resultado2 = (producto2 * iva) / 100;
    let resultado3 = (producto3 * iva) / 100;
    let resultado4 = (producto4 * iva) / 100;
    let resultado5 = (producto5 * iva) / 100;
    
    let resultado6 = producto1 + resultado1;
    let resultado7 = producto2 + resultado2;
    let resultado8 = producto3 + resultado3;
    let resultado9 = producto4 + resultado4;
    let resultado10 = producto5 + resultado5;

    alert(`
    Subtotal:
    Producto 1: ${producto1}
    Producto 2: ${producto2} 
    Producto 3: ${producto3} 
    Producto 4: ${producto4} 
    Producto 5: ${producto5} 
    iva: ${iva}%
    `)
    alert(`
    Iva por producto:
    Producto 1: ${resultado1}
    Producto 2: ${resultado2} 
    Producto 3: ${resultado3} 
    Producto 4: ${resultado4} 
    Producto 5: ${resultado5} 
    `)
    alert(`
    Total:
    Producto 1: ${resultado6}
    Producto 2: ${resultado7} 
    Producto 3: ${resultado8} 
    Producto 4: ${resultado9} 
    Producto 5: ${resultado10} 
    `)
}