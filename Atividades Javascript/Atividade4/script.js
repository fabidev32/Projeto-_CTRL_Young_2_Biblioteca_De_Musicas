let nome = document.querySelector("#nome");
let endereco = document.querySelector("#endereco");
let telefone = document.querySelector("#telefone");
let CPF = document.querySelector("#CPF");
let usuario = document.querySelector(".usuario");

function Cadastrar() {

    let div = document.createElement("div");
    div.innerHTML =
        "Nome: " + nome.value + "<br>" +
        "Endereço: " + endereco.value + "<br>" +
        "Telefone: " + telefone.value + "<br>" +
        "CPF: " + CPF.value;

    usuario.appendChild(div);
}

