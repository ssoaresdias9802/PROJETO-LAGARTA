
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form-card').addEventListener('submit', function(event) {
    event.preventDefault(); // impede envio real do formulário
    alert("Formulário enviado com sucesso!");
  });

});