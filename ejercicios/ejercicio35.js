function ejercicio35(){
    let llaves = parseInt(prompt("Ingresa el precio de cada una de las llaves hexagonales"));
    let cant_llaves =parseInt( prompt("Ingresa la cantidad de llaves hecagonales"));
    let bomba = parseInt(prompt("Ingresa el precio de la bomba"));
    let cant_bomba = parseInt(prompt("Ingresa la cantidad de las bombas"));
    let cajas = parseInt(prompt("Ingresa el precio de cada caja de pernos"));
    let cant_cajas = parseInt(prompt("Ingresa la cantidad de las cajas"));
    let restante = parseInt(prompt("Ingresa el valor restante de la compra"))

    let resultado1 = llaves * cant_llaves;
    let resultado2 = bomba * cant_bomba;
    let resultado3 = cajas * cant_cajas;
    let total = resultado1 + resultado2 + resultado3 + restante;
    alert(`El valor que tenias antes de comprar las herramientas es: ${total}`)
}
