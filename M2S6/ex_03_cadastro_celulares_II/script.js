let celularEditando = null;

// Obter parâmetros da URL
function obterParametroURL(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

// Carregar celular para edição
function carregarCelularParaEdicao(id) {
  const celulares = JSON.parse(localStorage.getItem('celulares')) || [];
  const celular = celulares.find(c => c.id == id);
  
  if (celular) {
    document.getElementById('modelo').value = celular.modelo;
    document.getElementById('marca').value = celular.marca;
    document.getElementById('cor').value = celular.cor;
    document.getElementById('preco').value = celular.preco;
    
    celularEditando = celular;
    document.querySelector('h1').textContent = 'Editar Celular';
    verificarCampos();
  }
}

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
  
  if (celularEditando) {
    // Atualizar celular existente
    const index = celulares.findIndex(c => c.id === celularEditando.id);
    if (index !== -1) {
      celulares[index] = { ...celular, id: celularEditando.id };
    }
  } else {
    // Adicionar novo celular
    celular.id = Date.now();
    celulares.push(celular);
  }
  
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
    preco: parseFloat(document.getElementById('preco').value)
  };
  
  salvarCelular(celular);
  
  if (celularEditando) {
    alert('Celular atualizado com sucesso');
    window.location.href = '../ex_05_cadastro_celulares_IV/index.html';
  } else {
    limparFormulario();
    alert('Dados salvos com sucesso');
  }
});

// Event listener para o botão voltar
document.getElementById('btn-voltar').addEventListener('click', function() {
  window.location.href = '../ex_05_cadastro_celulares_IV/index.html';
});

// Verificar se há ID na URL para edição
const idParaEdicao = obterParametroURL('id');
if (idParaEdicao) {
  carregarCelularParaEdicao(idParaEdicao);
}

// Verificar campos ao carregar a página
verificarCampos();