function ejercicio70(){
    let contrasena = prompt("Introduzca la contraseña a guardar");

    for(let a = 1; a <= 1; a++){
        let contrasena1 = prompt("Introduce la contraseña correcta");

        if( contrasena === contrasena1){
            alert("Contraseña correcta");
        }
        else{
            alert("Contraseña incorrecta, intenta de nuevo");
            a--;
        }
    }
}