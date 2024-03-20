function ejercicio43(){
    let regex = new RegExp(/"([^"\\]|\\.)*"/)
    let cadena = `Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir la presencia de "comillas" y caracteres escapados`;
    if(regex.test(cadena)){
        alert("Si tienes caracteres con comillas dobles");
    }
    else{
        alert("No tiene caracteres con comillas dobles");
    }
}