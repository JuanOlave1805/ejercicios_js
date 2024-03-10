function ejercicio73(){
    let frase = prompt("Ingresa una frase:");
    let letra = prompt("Ingresa una letra:");

    frase = frase.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }

    alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
}