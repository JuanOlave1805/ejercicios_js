function ejercicio59(){
    let edad = parseInt(prompt("Ingresa tu edad:"));

    if(edad <= 19){
        let altura = parseInt(prompt("Ingresa tu estatura en cm:"));

        if(altura >= 175){
            let peso = parseInt(prompt("Ingresa tu peso:"));
            
            if(peso >= 75 && peso <= 80){
                alert("Eres apto para entrar al equipo")
            }
            else{
                alert("No cumples con el peso requerido");
            }
        }
        else{
            alert("No cumples con la altura requerida");
        }
    }
    else{
        alert("No cumples con la edad requerida");
    }
}