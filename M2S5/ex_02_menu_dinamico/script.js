const opcoesMenu = ["Home", "Sobre", "Contato"];

const nav = document.createElement('nav');
const ul = document.createElement('ul');
ul.className = 'menu';

opcoesMenu.forEach(opcao => {
  const li = document.createElement('li');
  li.textContent = opcao;
  ul.appendChild(li);
});

nav.appendChild(ul);

document.querySelector('main').appendChild(nav);