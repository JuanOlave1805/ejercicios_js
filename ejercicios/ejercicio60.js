function ejercicio60(){
    let cursos = parseInt(prompt("Ingresa la cantidad de cursos"));

    if (cursos > 6){
        let resultado = 1200000 * cursos;
        alert(`
        Cantidad de cursos a tomar: ${cursos}
        Valor a pagar por curso: 1.200.000
        Valor a pagar en total: ${resultado}
        `);
    }
    else{
        let resultado = 2000000 * cursos;
        alert(`
        Cantidad de cursos a tomar: ${cursos}
        Valor a pagar por curso: 2.000.000
        Valor a pagar en total: ${resultado}
        `);
    }
}