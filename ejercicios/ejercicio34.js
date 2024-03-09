function ejercicio34(){
    let q = prompt("Ingresa el caudal");
    let radio = prompt("Ingresa el radio del caudal");
    let h = prompt("Ingresa la altura del caudal")

    let resultado1 = (volumen/ q) / 60;
    let volumen  = Math.PI *(radio * radio) * h;
    alert(`volumen = ${volumen}, Tiempo llenado = ${resultado1}`)
}