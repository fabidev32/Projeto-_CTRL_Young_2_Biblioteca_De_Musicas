//Elementos HTML
let descricao = document.querySelector("#descricao");
let nome = document.querySelector("#nome");
let link = document.querySelector("#link");
let input_com_imagem = document.getElementById("input_com_imagem");
let inpuy_com_audio = document.getElementById("input_com_audio");
let lista_de_musicas = document.querySelector(".lista_de_musicas");

//Array
let musicas = [];

const Musica = (nome, descricao, imagem, audio) => ({
  nome,
  descricao,
  imagem,
  audio,
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

function CriarMusica() {
  const urlImagem = PegarURLImagem();
  const urlAudio = PegarURLAudio();
  const novaMusica = Musica(nome.value, descricao.value, urlImagem, urlAudio);
  musicas.push(novaMusica);
  MostrarLista();
  
}

function MostrarLista() {
  lista_de_musicas.innerHTML = "";
  for (
    let posicao_array = 0;
    posicao_array < musicas.length;
    posicao_array++
  ) {
    const div = document.createElement("div");
    div.classList.add("card_musica");
    div.innerHTML = `
        <h3>${musicas[posicao_array].nome}</h3>
        <p>${musicas[posicao_array].descricao}</p>
        <img src = "${musicas[posicao_array].imagem}">
        <audio src="${musicas[posicao_array].audio}" controls autoplay></audio>
       <button onclick="RemoverElemento(${posicao_array})">
       Remover</button>
       </button>

       `;
    lista_de_musicas.appendChild(div);
    alert("Música cadastrada!");
  }

}

function RemoverElemento(indice) {
  musicas.splice(indice, 1);
  MostrarLista();
}

