function capitalizar() {
      const frase = document.getElementById('frase').value;
      const capitalizada = frase
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
      document.getElementById('resultado').textContent = capitalizada;
    }