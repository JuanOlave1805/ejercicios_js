function ejercicio29(){
    let nota1 = prompt("Ingresa la nota 1");
    let nota2 = prompt("Ingresa la nota 2");
    let nota3 = prompt("Ingresa la nota 3");
    let nota4 = prompt("Ingresa la nota 4");

    if (nota1 <= 5 && nota1 >=1 && nota2 <= 5 && nota2 >=1 && nota3 <= 5 && nota3 >=1 && nota4 <= 5 && nota4 >=1){
        let resultado = nota1 +++ nota2 +++ nota3 +++ nota4;
        let resultado1 = resultado / 4;
        alert(`Tu promedio fue: ${resultado1}`);
    }
    else{
        alert("Ingresaste una nota mal")
    }

}