function ejercicio61(){
    let alumnos = parseInt(prompt("Ingresa el numero de alumnos"));
    let notas = []
    let contA = 0;
    let contB = 0;
    let contC = 0;
    let contD = 0;
    let cont100 = 0;
    let rep = 0;
    let mayor = 0;
    let minimo = 101;
    


    for (let a = 0; a < alumnos; a++) {
        notas[a] = parseInt(prompt(`Ingresa la nota del estudiante ${a + 1}, recuerda que las notas van de 0 a 100`));
      
        if (notas[a] > mayor) {
          mayor = notas[a];
        }
      
        if (notas[a] < minimo) {
          minimo = notas[a];
        }
      
        if (notas[a] >= 90 && notas[a] < 100) {
          contA++;
        } 
        else if (notas[a] >= 80 && notas[a] < 90) {
          contB++;
        } 
        else if (notas[a] >= 70 && notas[a] < 80) {
          contC++;
        } 
        else if (notas[a] >= 60 && notas[a] < 70) {
          contD++;
        } 
        else if (notas[a] == 100) {
          cont100++;
        } 
        else if (notas[a] < 60) {
          rep++;
        } 
        else if (notas[a] > 100) {
          alert("Nota no valida por ser mayor a 100, vuelve a ingresarla");
          a--;
        }
    }



    alert(
        `
        Alumnos con nota de 100: ${cont100}
        Alumnos con nota de A: ${contA}
        Alumnos con nota de B: ${contB}
        Alumnos con nota de C: ${contC}
        Alumnos con nota de D: ${contD}
        Alumnos reprobados: ${rep}
        Nota mas alta: ${mayor}
        Nota mas baja: ${minimo}
        `
    )
}