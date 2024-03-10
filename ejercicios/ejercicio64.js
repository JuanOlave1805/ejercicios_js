function ejercicio64(){
    let numeros = [];
    let numero = parseInt(prompt("Ingresa el numero entero"))

    for(let a = 1; a <= numero; a++){
        if(a % 2 != 0){
            numeros[a] = a;
        }
    }
    alert(numeros.toString());

}