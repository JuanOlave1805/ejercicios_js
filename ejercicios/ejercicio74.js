function ejercicio74(){

    for (let a = 0; true; a++){
        let eco = prompt("Introduce la palabra");
        alert(eco);
        if(eco === "salir"){
            alert("Adios");
            break;
        }
    }
}