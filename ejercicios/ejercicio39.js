function ejercicio39(){
    let precio = parseInt(prompt("Ingresa el precio del metro cuadrado de pintura"));
    let cantidad = parseInt(prompt("Ingresa la cantidad de metros cuadrados"));

    let resultado = precio * cantidad;
    alert(`El total a pagar el cliente por pintar ${cantidad} m3 es: ${resultado}`);
}