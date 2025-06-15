document.getElementById("form-celular").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensagem").textContent = "Celular cadastrado com sucesso!";
    this.reset();
});