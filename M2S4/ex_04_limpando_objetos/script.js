const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined
};

document.getElementById('limpar-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const dadosLimpos = {};
  for (const chave in dados) {
    if (dados[chave] !== null && dados[chave] !== undefined) {
      dadosLimpos[chave] = dados[chave];
    }
  }

  document.getElementById('mensagem').textContent = JSON.stringify(dadosLimpos, null, 2);
  console.log(dadosLimpos);
});