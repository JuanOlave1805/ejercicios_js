function ejercicio65(){
    let numeros = [];
    let numero = parseInt(prompt("Ingresa el numero entero"))

    if(numero > 0){
        for(let a = 1; a <= numero; a++){
            numeros[a] = a
        }
    }
    let reversed = numeros.reverse()
    alert(reversed.toString());
    
}