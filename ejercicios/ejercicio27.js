function ejercicio27(){
    let nota1 = parseInt(prompt("Ingresa la nota del parcial 1"));
    let nota2 = parseInt(prompt("Ingresa la nota del parcial 2"));
    let nota3 = parseInt(prompt("Ingresa la nota del parcial 3"));
    let examen = parseInt(prompt("Ingresa la nota del examen final"));
    let trabajo = parseInt(prompt(  "Ingresa la nota del trabajo "));

    let resultado1 = (nota1 + nota2 + nota3) / 3;
    let resultado2 = (resultado1 * 55) / 100;
    let resultado3 = (examen * 30) / 100;
    let resultado4 = (trabajo * 15) / 100;
    let total = resultado4 +++ resultado2 +++ resultado3;
    alert(`La nota final es: ${total}`);
}