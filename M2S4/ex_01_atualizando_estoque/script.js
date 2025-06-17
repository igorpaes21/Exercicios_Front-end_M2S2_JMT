const produtos = [
  { nome: "Notebook", estoque: 4 },
  { nome: "Monitor", estoque: 0 },
  { nome: "Teclado", estoque: 2 },
  { nome: "Mouse", estoque: 0 }
];

document.getElementById('produtos-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const produtosEmEstoque = produtos.filter(produto => produto.estoque > 0);
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = produtosEmEstoque.map(p => `${p.nome} (Estoque: ${p.estoque})`).join('\n');
  console.log(produtosEmEstoque);
});