function calcularJuros(){
    const capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
    const periodo = parseFloat(document.getElementById("periodo").value);
    const resultado = capitalInicial * Math.pow(1 + 0.05, periodo);

    console.log('Resultado: ', resultado.toFixed(3));
}