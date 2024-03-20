function ejercicio30(){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    let contrasena = prompt("Ingresa la contraseña:")
    if(regex.test(contrasena)){
        alert("Contraseña segura")
    }
    else{
        alert("Contraseña insegura")
    }
}