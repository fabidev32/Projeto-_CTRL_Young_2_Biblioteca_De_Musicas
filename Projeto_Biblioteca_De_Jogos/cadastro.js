let nome = document.getElementById("nome");
let senha = document.getElementById("senha");

let array_de_usuarios = [];

const Usuario = (nome, senha) => ({
  nome,
  senha,
});

function CadastrarUsuario() {
    let usuario = Usuario(nome.value, senha.value);
    array_de_usuarios.push(usuario);  
    localStorage.setItem("usuarios", JSON.stringify(array_de_usuarios));

    window.location.href = "index.html";

}



