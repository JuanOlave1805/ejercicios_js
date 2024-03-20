function ejercicio72(){
    let palabra = prompt("Ingresa la palabra");

    let arr = palabra.split('');
    const reversed = arr.reverse()
    for(let a = 0; a<reversed.length; a++){
        alert(reversed[a]);
    }
}