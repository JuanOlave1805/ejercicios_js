function ejercicio34(){
    let q = parseInt(prompt("Ingresa el caudal"));
    let radio = parseInt(prompt("Ingresa el radio del caudal"));
    let h = parseInt(prompt("Ingresa la altura del caudal"))

    let volumen  = Math.PI *(radio * radio) * h;
    let resultado1 = (volumen/ q) / 60;
    alert(`volumen = ${volumen}, Tiempo llenado = ${resultado1}`)
}