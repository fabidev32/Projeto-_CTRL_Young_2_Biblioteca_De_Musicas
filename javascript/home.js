let genero = document.querySelector(".genero");

//Puxar demais variáveis
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const div_trilho = document.querySelector(".carrossel_trilho");
const div_bem_vindo = document.querySelector(".div_bem_vindo");

//Crio a minha lista de gêneros
let generos = ["Rock", "MB", "Brasileira"];


let indice = 0;
let total_imagens = 4;
// Lógica do carrossel
function AtualizarCarrossel() {
  const deslocamento = indice * 100;
  div_trilho.style.transform = `translateX(-${deslocamento}%)`;
}

function Anterior() {
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
  AtualizarCarrossel();//Lógica para clicar e levar até a seção 

}

function BotaoBemVindo() {
  div_bem_vindo.scrollIntoView();
}

// Lógica para mostrar os gêneros

function MostrarGeneros() {
  for (let i = 0; i < generos.length; i++) {
    const div = document.createElement("div");
    console.log(generos[i]);
    div.innerHTML = `
      <p class = "genero_musical"> ${generos[i]} </p> 
      `;
    genero.appendChild(div);
  }
}

MostrarGeneros();
localStorage.setItem("lista_de_generos", JSON.stringify(generos));


