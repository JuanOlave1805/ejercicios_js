function ejercicio42(){
    let precio_cud = parseInt(prompt("Ingresa el precio de los cuadernos"));
    let precio_lib = parseInt(prompt("Ingresa el precio de los cuadernos"));
    let precio_lap = parseInt(prompt("Ingresa el precio de los cuadernos"));

    let cuadernos = parseInt(prompt("Ingresa la cantidad de cuadernos vendidos en el dia:"));
    let libros = parseInt(prompt("Ingresa la cantidad de cuadernos vendidos en el dia:"));
    let lapiceros = parseInt(prompt("Ingresa la cantidad de cuadernos vendidos en el dia:"));

    let resultado1 = cuadernos * precio_cud;
    let resultado2 = libros * precio_lib;
    let resultado3 = lapiceros * precio_lap;
    alert(`Ventas total de lapiceros: ${resultado3}. Ventas total de libros: ${resultado2}. Ventas total de cuadernos: ${resultado1}`);
}