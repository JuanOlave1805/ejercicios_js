function ejercicio49(){
    let base = parseInt(prompt("Ingresa la base del rectangulo"));
    let altura = parseInt(prompt("Ingresa la altura del rectangulo"));

    if(base > 0 && altura > 0){
        let resultado = base * altura;
        alert(`El area del rectangulo es: ${resultado}`);
    }
    else{
        alert("Introduciste algun valor negativo por lo tanto no puedo funcionar");
    }
}