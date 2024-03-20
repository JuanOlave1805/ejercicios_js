function ejercicio56(){
    let saldo = parseFloat(prompt("Ingresa el valor de el saldo en cuenta"));

    if (saldo <= 100.000 ){
        let resultado = (saldo * 3) / 100;
        alert(`
        Saldo: ${saldo}
        intereses: ${resultado}
        Porcentaje interes: 3%
        `);
    }
    else if (saldo > 100.000 ){
        let resultado = (saldo * 4) / 100;
        alert(`
        Saldo: ${saldo}
        intereses: ${resultado}
        Porcentaje interes: 4%
        `);
    }
}