function ejercicio48(){
    let forma = prompt("Que area desea calcular: Circulo o triangulo")

    if(forma === forma.charAt(T) || forma === forma.charAt(t)){
        let base = prompt("Ingresa la medida de la base del triangulo");
        let altura = prompt("Ingresa la medida de la altura del triangulo");
        
        let resultado = (base * altura) / 2;
        alert(`El area del triangulo es: ${resultado}`)
    }
    else{
        let radio = prompt("Ingresa el radio de el circulo");

        let resultado = Math.PI * (radio * radio);
        alert(`El area de el circulo es: ${resultado}`)
    }
}