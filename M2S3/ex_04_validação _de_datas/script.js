document.getElementById('form-data').addEventListener('submit', function(event) {
    event.preventDefault();

    const dia = parseInt(document.getElementById('dia').value, 10);
    const mes = parseInt(document.getElementById('mes').value, 10);
    const ano = parseInt(document.getElementById('ano').value, 10);
    const mensagem = document.getElementById('mensagem');

    let diasNoMes = 0;

    if(mes === 2){
        diasNoMes = 28;
    } else if([4, 6, 9, 11].includes(mes)){
        diasNoMes = 30;
    } else if([1, 3, 5, 7, 8, 10, 12].includes(mes)){
        diasNoMes = 31;
    }

    if(
        ano > 0 && ano <9999 &&
        mes > 1 && mes <= 12 &&
        dia > 1 && dia <= diasNoMes
    ) {
        mensagem.textContent = "Data válida!";
        console.log("Data válida!");
    }else {
        mensagem.textContent = "Data inválida!";
        console.log("Data inválida!");
    }
    
});