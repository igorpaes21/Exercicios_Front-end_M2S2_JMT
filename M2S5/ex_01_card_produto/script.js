const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];

const section = document.getElementById('produtos');

produtos.forEach(produto => {
  const card = document.createElement('div');
  card.className = 'card';

  const titulo = document.createElement('h3');
  titulo.textContent = produto.nome;

  const preco = document.createElement('p');
  preco.textContent = `R$ ${produto.preco}`;

  card.appendChild(titulo);
  card.appendChild(preco);

  section.appendChild(card);
});