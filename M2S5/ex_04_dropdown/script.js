const dropdown = document.querySelector('.dropdown');
const btn = document.getElementById('dropdown-btn');

btn.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  dropdown.classList.remove('open');
});