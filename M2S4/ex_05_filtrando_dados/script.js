function filtrarLista(lista, propriedades, valores) {
  return lista.filter(item =>
    propriedades.every((prop, idx) => item[prop] === valores[idx])
  );
}

// Exemplo de uso:
const pessoas = [
  { nome: "Lucas", idade: 30, cidade: "São Paulo" },
  { nome: "Ana", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "Lucas", idade: 22, cidade: "Belo Horizonte" }
];

document.getElementById('filtro-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Exemplo: filtrar pessoas com nome "Lucas" e cidade "São Paulo"
  const resultado = filtrarLista(pessoas, ["nome", "cidade"], ["Lucas", "São Paulo"]);
  document.getElementById('mensagem').textContent = JSON.stringify(resultado, null, 2);
  console.log(resultado);
});