//Listar os gêneros
let lista_de_generos = JSON.parse(localStorage.getItem("generos")) || [];
let genero = document.querySelector(".genero");

//Puxar demais variáveis
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const div_trilho = document.querySelector(".carrossel_trilho");
const div_bem_vindo = document.querySelector(".div_bem_vindo");

let indice = 0;
let total_imagens = 4;

// Lógica do carrossel
function AtualizarCarrossel() {
  const deslocamento = indice * 100;
  div_trilho.style.transform = `translateX(-${deslocamento}%)`;
}

function Anterior() {
  indice = indice === 0 ? 0 : indice - 1;
  if (indice === 0) {
    indice = 0;
  } else {
    indice = indice - 1;
  }
  AtualizarCarrossel();
}

function Proximo() {
  if (indice === total_imagens - 1) {
    indice = 0;
  } else {
    indice = indice + 1;
  }
  AtualizarCarrossel();
}

// Lógica para mostrar os gêneros

function MostrarGeneros() {
  for (let i = 0; i < lista_de_generos.length; i++) {
    const div = document.createElement("div");
    console.log(lista_de_generos[i]);
    div.innerHTML = `
      <p class = "genero_musical"> ${lista_de_generos[i]} </p> 
      `;
    genero.appendChild(div);
  }
}

MostrarGeneros();

//Lógica para clicar e levar até a seção 

function BotaoBemVindo() {
    div_bem_vindo.scrollIntoView();
}

