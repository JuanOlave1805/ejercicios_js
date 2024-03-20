function ejercicio58(){
    let mes = parseInt(prompt("Ingresa el mes de nacimiento, debe ser numerico"));
    let dia = parseInt(prompt("Ingresa el dia de nacimiento, debe ser numerico"));

    if (mes == 1) {
        if (dia >= 21) {
            //acuario
            alert("acuario");
        } else {
            //capricornio
            alert( "capricornio");
        }
    }
    if (mes == 2) {
        if (dia >= 19) {
            alert( "piscis");
        } else {
            alert( "acuario");
        }
    }
    if (mes == 3) {
        if (dia >= 20) {
            //acuario
            alert( "aries");
        } else {
            //capricornio
            alert( "piscis");
        }
    }
    if (mes == 4) {
        if (dia >= 20) {
            alert( "tauro");
        } else {
            alert( "Aries");
        }
    }
    if (mes == 5) {
        if (dia >= 21) {
            //acuario
            alert( "geminis");
        } else {
            //capricornio
            alert( "tauro");
        }
    }
    if (mes == 6) {
        if (dia >= 20) {
            alert( "cancer");
        } else {
            alert( "geminis");
        }
    }
    if (mes == 7) {
        if (dia >= 22) {
            //acuario
            alert( "leo");
        } else {
            //capricornio
            alert( "cancer");
        }
    }
    if (mes == 8) {
        if (dia >= 21) {
            alert( "virgo");
        } else {
            alert( "leo");
        }
    }
    if (mes == 9) {
        if (dia >= 22) {
            //acuario
            alert( "libra");
        } else {
            //capricornio
            alert( "virgo");
        }
    }
    if (mes == 10) {
        if (dia >= 22) {
            alert( "escorpion");
        } else {
            alert( "libra");
        }
    }
    if (mes == 11) {
        if (dia >= 21) {
            //acuario
            alert( "sagitario");
        } else {
            //capricornio
            alert( "escorpion");
        }
    }
    if (mes == 12) {
        if (dia >= 21) {
            alert( "capricornio");
        } else {
            alert( "sagitario");
        }
    }
}