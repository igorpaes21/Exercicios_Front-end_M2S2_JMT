const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];

document.getElementById('vendas-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let mensagemItens = '';
  let total = 0;

  vendas.forEach(item => {
    mensagemItens += `Produto: ${item.produto} - Valor: R$ ${item.valor}\n`;
    console.log(`Produto: ${item.produto} - Valor: R$ ${item.valor}`);
    total += item.valor;
  });

  mensagemItens += `\nTotal de vendas: R$ ${total}`;
  document.getElementById('mensagem').textContent = mensagemItens;
  console.log(`Total de vendas: R$ ${total}`);
});