// Carregar celulares do localStorage
function carregarCelulares() {
  const celulares = JSON.parse(localStorage.getItem('celulares')) || [];
  return celulares;
}

// Salvar celulares no localStorage
function salvarCelulares(celulares) {
  localStorage.setItem('celulares', JSON.stringify(celulares));
}

// Excluir celular
function excluirCelular(id) {
  let celulares = carregarCelulares();
  celulares = celulares.filter(celular => celular.id !== id);
  salvarCelulares(celulares);
  renderizarTabela();
}

// Alterar celular
function alterarCelular(id) {
  window.location.href = `../ex_03_cadastro_celulares_II/index.html?id=${id}`;
}

// Renderizar tabela de celulares
function renderizarTabela() {
  const tbody = document.getElementById('tbody-celulares');
  const celulares = carregarCelulares();
  
  tbody.innerHTML = '';
  
  if (celulares.length === 0) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 5;
    td.className = 'sem-dados';
    td.textContent = 'Nenhum celular cadastrado';
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }
  
  celulares.forEach(celular => {
    const tr = document.createElement('tr');
    
    // Modelo
    const tdModelo = document.createElement('td');
    tdModelo.textContent = celular.modelo;
    tr.appendChild(tdModelo);
    
    // Marca
    const tdMarca = document.createElement('td');
    tdMarca.textContent = celular.marca;
    tr.appendChild(tdMarca);
    
    // Cor
    const tdCor = document.createElement('td');
    tdCor.textContent = celular.cor;
    tr.appendChild(tdCor);
    
    // Preço
    const tdPreco = document.createElement('td');
    tdPreco.textContent = `R$ ${celular.preco.toFixed(2)}`;
    tr.appendChild(tdPreco);
    
    // Ações
    const tdAcoes = document.createElement('td');
    
    const btnAlterar = document.createElement('button');
    btnAlterar.className = 'btn-alterar';
    btnAlterar.textContent = 'Alterar';
    btnAlterar.addEventListener('click', () => {
      alterarCelular(celular.id);
    });
    
    const btnExcluir = document.createElement('button');
    btnExcluir.className = 'btn-excluir';
    btnExcluir.textContent = 'Excluir';
    btnExcluir.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja excluir este celular?')) {
        excluirCelular(celular.id);
      }
    });
    
    tdAcoes.appendChild(btnAlterar);
    tdAcoes.appendChild(btnExcluir);
    tr.appendChild(tdAcoes);
    
    tbody.appendChild(tr);
  });
}

// Event listener para o botão cadastrar
document.getElementById('btn-cadastrar').addEventListener('click', function() {
  window.location.href = '../ex_03_cadastro_celulares_II/index.html';
});

// Renderizar tabela ao carregar a página
renderizarTabela();