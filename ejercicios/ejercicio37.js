function ejercicio37(){
    let cajas = parseInt(prompt("Ingresa la cantidad de cajas que carga el camion"));
    let peso = parseInt(prompt("Ingresa el peso de cada caja"));

    let resultado = cajas * peso;
    alert(`El camion lleva ${resultado} kg `);
}