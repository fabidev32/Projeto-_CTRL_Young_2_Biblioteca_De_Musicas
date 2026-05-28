const nome = document.getElementById("nome");
// let genero = document.getElementById("genero");
let genero = document.querySelector(".genero");
let lista_de_musicas = document.querySelector(".lista_de_musicas");
let audio = document.querySelector("#audio");
let input_com_imagem = document.getElementById("input_com_imagem");
let input_com_audio = document.getElementById("input_com_audio");
const texto_pesquisa = document.querySelector("#texto_pesquisa");
const limpar_filtro = document.querySelector("#limpar_filtro");

let musicas = [];

let lista_de_generos = [
  "Rock",
  "MB",
  "Brasileira"
]


texto_pesquisa.addEventListener("input", function () {
  ListaComFiltro();
});

limpar_filtro.addEventListener("click", function () {
  ListaSemFiltro();
});

function PegarURLImagem() {
  if (input_com_imagem.files.length === 0) {
    return "";
  }
  return URL.createObjectURL(input_com_imagem.files[0]);
}
function PegarURLAudio() {
  if (input_com_audio.files.length === 0) {
    return "";
  }
  return URL.createObjectURL(input_com_audio.files[0]);
}

function CadastrarMusica() {
  const urlImagem = PegarURLImagem();
  const urlAudio = PegarURLAudio();
  const novaMusica = Musica(nome.value, genero.value, urlImagem, urlAudio);

  if (VerificarCampos(novaMusica)) {
    musicas.push(novaMusica);
    ListaSemFiltro();
  }
  else {
    alert("Preencha todos os campos obrigatórios!");
  }
}

function VerificarCampos(novaMusica) {
  if (novaMusica.nome != "" && novaMusica.genero != "" && novaMusica.audio !== "") {
    return true;
  }
  return false;
}

function RemoverElemento(indice) {
  musicas.splice(indice, 1);
  lista_de_musicas.innerHTML = "";
  ListaSemFiltro();
}

function ListaSemFiltro() {
  lista_de_musicas.innerHTML = "";
  for (let i = 0; i < musicas.length; i++) {
    const div = document.createElement("div");
    div.classList.add("card_musica");
    div.innerHTML = `
        <img src = "${musicas[i].imagem}">
        <audio src="${musicas[i].audio}" controls autoplay></audio>
        <h2>${musicas[i].nome}</h2>
        <div>
        <p>${musicas[i].genero}</p>
         <a href="${musicas[i].audio}"> Acesse o audio </a>
         </div>
         <button onclick="RemoverElemento(${i})"> Remover elemento </button>
        
         `;
    lista_de_musicas.appendChild(div);
  }
}

function ListaComFiltro() {
  lista_de_musicas.innerHTML = "";
  for (let i = 0; i < musicas.length; i++) {
    if (musicas[i].nome === texto_pesquisa.value) {
      const div = document.createElement("div");
      div.classList.add("card_musica");
      div.innerHTML = `
           <img src = "${musicas[i].imagem}">
      <audio src="${musicas[i].audio}" controls autoplay></audio>
        <p>${musicas[i].nome}</p>
        <p>${musicas[i].genero}</p>
         <a href="${musicas[i].link}"> Acesse o link </a>
         <button onclick="RemoverElemento(${i})"> Remover elemento </button>
        `;
      lista_de_musicas.appendChild(div);
    }
  }
}

function PreencherGeneros() {
  for (let i = 0; i < lista_de_generos.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
      <option> ${lista_de_generos[i]} </option> 
      `
    genero.appendChild(div);

  }
}

const Musica = (nome, genero, imagem, link) => ({
  nome,
  genero,
  imagem,
  link,
});


PreencherGeneros();

localStorage.setItem("generos", JSON.stringify(lista_de_generos));
localStorage.setItem("lista_de_musicas", JSON.stringify(musicas));
