document.getElementById('form-tarefa').addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.getElementById('tarefa');
  const texto = input.value.trim();
  if (texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    document.getElementById('lista-tarefas').appendChild(li);
    input.value = '';
    input.focus();
  }
});