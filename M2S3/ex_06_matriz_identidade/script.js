document
  .getElementById("matriz-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const ordem = parseInt(document.getElementById("ordem").value, 10);
    const mensagem = document.getElementById("mensagem");
    let matriz = "";

    for (let i = 0; i < ordem; i++) {
      let linha = "";
      for (let j = 0; j < ordem; j++) {
        linha += i === j ? "1" : "0";
      }
      matriz += linha + "\n";
    }

    mensagem.textContent = matriz;
    console.log(matriz);
  });
