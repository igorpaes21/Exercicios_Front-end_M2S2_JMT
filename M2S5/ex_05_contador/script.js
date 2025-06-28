let contador = 0;

const valorContador = document.getElementById('valor-contador');
const btnAdicionar = document.getElementById('adicionar');
const btnSubtrair = document.getElementById('subtrair');
const btnZerar = document.getElementById('zerar');

btnAdicionar.addEventListener('click', () => {
  contador++;
  valorContador.textContent = contador;
});

btnSubtrair.addEventListener('click', () => {
  contador--;
  valorContador.textContent = contador;
});

btnZerar.addEventListener('click', () => {
  contador = 0;
  valorContador.textContent = contador;
});