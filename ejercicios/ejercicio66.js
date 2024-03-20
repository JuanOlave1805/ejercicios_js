function ejercicio66(){
    let inversion = parseInt(prompt("Ingresa el valor de la inversion"));
    let interes = parseInt(prompt("Ingresa el porsentaje de interes anual"));
    let tiempo = parseInt(prompt("Ingresa el tiempo de inversion"));

    
    for(let a = 1; a<= tiempo; a++){
        let intereses = (inversion * interes) / 100;
        inversion = inversion + intereses;
        alert(`Capital obtenido en el año ${a} es: ${inversion} con el interes del ${interes}%`)
    }
}