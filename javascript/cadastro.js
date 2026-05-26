//Elementos HTML
let descricao = document.querySelector("#descricao");
let nome = document.querySelector("#nome");
let link = document.querySelector("#link");
let input_com_imagem = document.getElementById("input_com_imagem");
let lista_de_jogos = document.querySelector(".lista_de_jogos");

//Array
let musicas = [];

function PegarURLImagem() {
  if (input_com_imagem.files.length === 0) {
    return "";
  }
  return URL.createObjectURL(input_com_imagem.files[0]);
}

function CriarMusica() {
  const urlImagem = PegarURLImagem();
  const novaMusica = Musica(nome.value, descricao.value, urlImagem, link.value);
  musicas.push(novaMusica);
  localStorage.setItem("array_musicas", JSON.stringify(musicas));
  alert("Música cadastrada!");
}

const Musica = (nome, descricao, imagem, link) => ({
  nome,
  descricao,
  imagem,
  link,
});
