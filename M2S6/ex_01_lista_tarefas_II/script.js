let tarefas = [];

// Carregar tarefas do localStorage ao abrir a página
function carregarTarefas() {
  const tarefasSalvas = localStorage.getItem('tarefas');
  if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas);
    renderizarTarefas();
  }
}

// Salvar tarefas no localStorage
function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Renderizar lista de tarefas na tela
function renderizarTarefas() {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    
    const textoTarefa = document.createElement('span');
    textoTarefa.className = 'tarefa-texto';
    textoTarefa.textContent = tarefa;
    
    const btnExcluir = document.createElement('button');
    btnExcluir.className = 'btn-excluir';
    btnExcluir.textContent = 'Excluir';
    btnExcluir.addEventListener('click', () => excluirTarefa(index));
    
    li.appendChild(textoTarefa);
    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

// Adicionar nova tarefa
function adicionarTarefa(texto) {
  if (texto.trim()) {
    tarefas.push(texto.trim());
    salvarTarefas();
    renderizarTarefas();
  }
}

// Excluir tarefa
function excluirTarefa(index) {
  tarefas.splice(index, 1);
  salvarTarefas();
  renderizarTarefas();
}

// Event listener para o formulário
document.getElementById('form-tarefa').addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.getElementById('tarefa');
  const texto = input.value;
  
  adicionarTarefa(texto);
  input.value = '';
  input.focus();
});

// Carregar tarefas ao inicializar a página
carregarTarefas();