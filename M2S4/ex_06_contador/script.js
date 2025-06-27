const contador = {
  valor: 0,
  incrementar() {
    this.valor += 1;
  },
  decrementar() {
    this.valor -= 1;
  },
  mostrarValor() {
    const mensagem = `O valor atual é ${this.valor}`;
    document.getElementById('mensagem').textContent = mensagem;
    console.log(mensagem);
  }
};

document.getElementById('incrementar').addEventListener('click', function() {
  contador.incrementar();
});

document.getElementById('decrementar').addEventListener('click', function() {
  contador.decrementar();
});

document.getElementById('mostrar').addEventListener('click', function() {
  contador.mostrarValor();
});