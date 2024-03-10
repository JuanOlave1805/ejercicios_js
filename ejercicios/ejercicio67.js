function ejercicio67(){
    altura = prompt("Ingresa la altura del triangulo")

    if (!isNaN(altura) && altura > 0) {
        let resultado = "";

        for (let i = 1; i <= altura; i++) {

            let linea = "";
            for (let j = 1; j <= i; j++) {
                linea += "*";
            }
            resultado += linea + "\n";
        }

        alert(resultado);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}