function ejercicio78(){
    let palabra = prompt("Ingresa la palabra");

    if(palabra.length > 5){
        alert(`${palabra} es una palabra larga`);
    }
    else{
        alert(`${palabra} es una palabra corta`);
    }
}