function ejercicio57(){
    let calificacion = parseFloat(prompt("Ingresa el valor de la calificacion"));

    if (calificacion >9.0 && calificacion <=10.0){
        alert("Excelente");
    }
    else if (calificacion >8.1 && calificacion <=9.0){
        alert("Muy bien");
    }
    else if (calificacion >7.5 && calificacion <=8){
        alert("Bien");
    }
    else if(calificacion <= 7.5){
        alert("No aprobado");
    }
}