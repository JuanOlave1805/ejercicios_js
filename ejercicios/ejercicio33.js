function ejercicio33(){
    let edad_madre = parseInt(prompt("Ingresa la edad de la madre actualmente"));
    let edad_hijo = parseInt(prompt("Ingresa la edad del hijo actualmente"));

    let resultado = edad_madre - edad_hijo;
    alert(`La madre tenia ${resultado} años cuando dio a luz a su hijo`);
}