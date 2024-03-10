function ejercicio68(){
    for (let i = 1; i <= 10; i++) {
        let fila = '';
        
        for (let j = 1; j <= 10; j++) {
            fila += (i * j) + '\t';
        }
        
        console.log(fila);
    }
    
}