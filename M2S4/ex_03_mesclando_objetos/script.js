const dadosPessoais = { nome: "Lucas", idade: 30 };
const endereco = { cidade: "São Paulo", estado: "SP" };

document.getElementById('merge-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const pessoaCompleta = { ...dadosPessoais, ...endereco };
  document.getElementById('mensagem').textContent = JSON.stringify(pessoaCompleta, null, 2);
  console.log(pessoaCompleta);
});