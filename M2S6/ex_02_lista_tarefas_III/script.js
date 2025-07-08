let tarefas = [];
let tarefasConcluidas = [];

// Carregar dados do localStorage ao abrir a página
function carregarDados() {
  const tarefasSalvas = localStorage.getItem('tarefas');
  const tarefasConcluidasSalvas = localStorage.getItem('tarefasConcluidas');
  
  if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas);
  }
  
  if (tarefasConcluidasSalvas) {
    tarefasConcluidas = JSON.parse(tarefasConcluidasSalvas);
  }
  
  renderizarTarefas();
}

// Salvar dados no localStorage
function salvarDados() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  localStorage.setItem('tarefasConcluidas', JSON.stringify(tarefasConcluidas));
}

// Renderizar ambas as listas de tarefas
function renderizarTarefas() {
  renderizarListaTarefas();
  renderizarListaConcluidas();
}

// Renderizar lista de tarefas a realizar
function renderizarListaTarefas() {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = criarElementoTarefa(tarefa, index, false);
    lista.appendChild(li);
  });
}

// Renderizar lista de tarefas concluídas
function renderizarListaConcluidas() {
  const lista = document.getElementById('lista-concluidas');
  lista.innerHTML = '';

  tarefasConcluidas.forEach((tarefa, index) => {
    const li = criarElementoTarefa(tarefa, index, true);
    lista.appendChild(li);
  });
}

// Criar elemento de tarefa
function criarElementoTarefa(tarefa, index, isConcluida) {
  const li = document.createElement('li');
  if (isConcluida) {
    li.className = 'tarefa-concluida';
  }
  
  const conteudo = document.createElement('div');
  conteudo.className = 'tarefa-conteudo';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isConcluida;
  checkbox.addEventListener('change', () => {
    if (isConcluida) {
      desmarcarTarefa(index);
    } else {
      marcarTarefa(index);
    }
  });
  
  const textoTarefa = document.createElement('span');
  textoTarefa.className = 'tarefa-texto';
  textoTarefa.textContent = tarefa;
  
  const btnExcluir = document.createElement('button');
  btnExcluir.className = 'btn-excluir';
  btnExcluir.textContent = 'Excluir';
  btnExcluir.addEventListener('click', () => {
    if (isConcluida) {
      excluirTarefaConcluida(index);
    } else {
      excluirTarefa(index);
    }
  });
  
  conteudo.appendChild(checkbox);
  conteudo.appendChild(textoTarefa);
  li.appendChild(conteudo);
  li.appendChild(btnExcluir);
  
  return li;
}

// Marcar tarefa como concluída
function marcarTarefa(index) {
  const tarefa = tarefas[index];
  tarefas.splice(index, 1);
  tarefasConcluidas.push(tarefa);
  salvarDados();
  renderizarTarefas();
}

// Desmarcar tarefa concluída
function desmarcarTarefa(index) {
  const tarefa = tarefasConcluidas[index];
  tarefasConcluidas.splice(index, 1);
  tarefas.push(tarefa);
  salvarDados();
  renderizarTarefas();
}

// Adicionar nova tarefa
function adicionarTarefa(texto) {
  if (texto.trim()) {
    tarefas.push(texto.trim());
    salvarDados();
    renderizarTarefas();
  }
}

// Excluir tarefa
function excluirTarefa(index) {
  tarefas.splice(index, 1);
  salvarDados();
  renderizarTarefas();
}

// Excluir tarefa concluída
function excluirTarefaConcluida(index) {
  tarefasConcluidas.splice(index, 1);
  salvarDados();
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

// Carregar dados ao inicializar a página
carregarDados();