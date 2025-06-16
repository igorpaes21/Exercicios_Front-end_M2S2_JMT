document.getElementById('frete-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const regiao = document.getElementById('regiao').value.trim();
  const peso = parseFloat(document.getElementById('peso').value);
  const mensagem = document.getElementById('mensagem');
  let valorFrete;

  switch (regiao.toLowerCase()) {
    case 'norte':
      valorFrete = 24 + (2.20 * peso);
      break;
    case 'nordeste':
      valorFrete = 22 + (2.10 * peso);
      break;
    case 'centro-oeste':
      valorFrete = 20 + (2.00 * peso);
      break;
    case 'sudeste':
      valorFrete = 16 + (1.80 * peso);
      break;
    case 'sul':
      valorFrete = 18 + (1.90 * peso);
      break;
    default:
      mensagem.textContent = "Região inválida";
      console.log("Região inválida");
      return;
    }

    mensagem.textContent = `O valor do frete é R$ ${valorFrete.toFixed(2)}`;
    console.log(`O valor do frete é R$ ${valorFrete.toFixed(2)}`);
});