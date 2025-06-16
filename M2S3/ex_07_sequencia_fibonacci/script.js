document.getElementById('fibonacci-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const limite = parseInt(document.getElementById('limite').value, 10);
  const mensagem = document.getElementById('mensagem');
  let sequencia = [];
  let a = 0, b = 1;

  if (limite >= 0) sequencia.push(0);
  if (limite >= 1) sequencia.push(1);

  while (true) {
    let proximo = a + b;
    if (proximo > limite) break;
    sequencia.push(proximo);
    a = b;
    b = proximo;
  }

  mensagem.textContent = sequencia.join(', ');
  console.log(sequencia.join(', '));
});