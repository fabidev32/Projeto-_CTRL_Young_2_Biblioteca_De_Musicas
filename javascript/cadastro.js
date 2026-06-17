let generos = JSON.parse(localStorage.getItem("lista_de_generos")) || [];

const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
let genero = document.querySelector(".genero");
let lista_de_musicas = document.querySelector(".lista_de_musicas");
let audio = document.querySelector("#audio");
let input_com_imagem = document.getElementById("input_com_imagem");
let input_com_audio = document.getElementById("input_com_audio");
const texto_pesquisa = document.querySelector("#texto_pesquisa");
const limpar_filtro = document.querySelector("#limpar_filtro");

let musicas = [];


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
  const novaMusica = Musica(nome.value, genero.value, urlImagem, urlAudio, descricao.value);

  if (VerificarCampos(novaMusica)) {
    musicas.push(novaMusica);
    ListaSemFiltro();
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }
}

function VerificarCampos(novaMusica) {
  if (novaMusica.nome != "" &&
    novaMusica.genero != "" &&
    novaMusica.descricao  != "") {
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
        <h2>${musicas[i].nome}</h2>
        <div>
        <p>${musicas[i].genero}</p>
        <p>${musicas[i].descricao}</p>
        <audio src="${musicas[i].audio}" controls autoplay></audio>
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
        <h2>${musicas[i].nome}</h2>
        <div>
        <p>${musicas[i].genero}</p>
        <p>${musicas[i].descricao}</p>
        <audio src="${musicas[i].audio}" controls autoplay></audio>
        </div>
        <button onclick="RemoverElemento(${i})"> Remover elemento </button>
         `;
      lista_de_musicas.appendChild(div);
    }
  }
}

function PreencherGeneros() {
  for (let i = 0; i < generos.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
      <option class = "option"> ${generos[i]} </option> 
      `;
    genero.appendChild(div);
  }
}

const Musica = (nome, genero, imagem, audio, descricao) => ({
  nome,
  genero,
  imagem,
  audio,
  descricao,
});

PreencherGeneros();
