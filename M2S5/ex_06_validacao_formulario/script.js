const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');
const form = document.getElementById('form-login');

function validarEmail() {
  const valor = emailInput.value;
  if (!valor.includes('@')) {
    erroEmail.textContent = 'E-mail deve conter @';
    return false;
  } else {
    erroEmail.textContent = '';
    return true;
  }
}

function validarSenha() {
  const valor = senhaInput.value;
  if (valor.length < 6) {
    erroSenha.textContent = 'Senha deve ter no mínimo 6 caracteres';
    return false;
  } else {
    erroSenha.textContent = '';
    return true;
  }
}

emailInput.addEventListener('input', validarEmail);
emailInput.addEventListener('blur', validarEmail);

senhaInput.addEventListener('input', validarSenha);
senhaInput.addEventListener('blur', validarSenha);

form.addEventListener('submit', function(event) {
  const emailValido = validarEmail();
  const senhaValida = validarSenha();
  if (!emailValido || !senhaValida) {
    event.preventDefault();
  }
});