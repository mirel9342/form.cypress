function validarForm() {
     
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var nomeDaMae = document.getElementById("nome_da_mae").value;
    var nomeDoPai = document.getElementById("nome_da_pai").value;

    if (nome === "" || sobrenome === "" || nomeDaMae === "" || nomeDoPai === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; // Impede o envio do formulário se algum campo estiver vazio
    }

     

    return true; // O formulário será enviado se todos os campos obrigatórios estiverem preenchidos
}
 




