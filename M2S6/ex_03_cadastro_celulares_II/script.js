// Verificar se todos os campos estão preenchidos
function verificarCampos() {
  const modelo = document.getElementById('modelo').value.trim();
  const marca = document.getElementById('marca').value.trim();
  const cor = document.getElementById('cor').value.trim();
  const preco = document.getElementById('preco').value.trim();
  
  const btnSalvar = document.getElementById('btn-salvar');
  
  if (modelo && marca && cor && preco) {
    btnSalvar.disabled = false;
  } else {
    btnSalvar.disabled = true;
  }
}

// Limpar formulário
function limparFormulario() {
  document.getElementById('modelo').value = '';
  document.getElementById('marca').value = '';
  document.getElementById('cor').value = '';
  document.getElementById('preco').value = '';
  verificarCampos();
}

// Salvar celular no localStorage
function salvarCelular(celular) {
  let celulares = JSON.parse(localStorage.getItem('celulares')) || [];
  celulares.push(celular);
  localStorage.setItem('celulares', JSON.stringify(celulares));
}

// Event listeners para verificar campos em tempo real
document.getElementById('modelo').addEventListener('input', verificarCampos);
document.getElementById('marca').addEventListener('input', verificarCampos);
document.getElementById('cor').addEventListener('input', verificarCampos);
document.getElementById('preco').addEventListener('input', verificarCampos);

// Event listener para o formulário
document.getElementById('form-celular').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const celular = {
    modelo: document.getElementById('modelo').value.trim(),
    marca: document.getElementById('marca').value.trim(),
    cor: document.getElementById('cor').value.trim(),
    preco: parseFloat(document.getElementById('preco').value),
    id: Date.now() // ID único baseado no timestamp
  };
  
  salvarCelular(celular);
  limparFormulario();
  alert('Dados salvos com sucesso');
});

// Event listener para o botão voltar
document.getElementById('btn-voltar').addEventListener('click', function() {
  // Redirecionar para a página de listagem
  window.location.href = '../ex_04_listagem_celulares/index.html';
});

// Verificar campos ao carregar a página
verificarCampos();