function ejercicio44(){
    let pesos = parseFloat(prompt("Ingresa la cantidad de pesos a pasar a dolar y euro"));

    dolar = pesos * 0.00026;
    euro = pesos * 0.00023;
    alert(`Al pasar de peso a dolar: ${dolar}. Al pasar de peso a euro: ${euro}`);
}