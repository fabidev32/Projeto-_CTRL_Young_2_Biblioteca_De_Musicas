let array_musicas = JSON.parse(localStorage.getItem("array_musicas")) || [];
let lista_de_musicas = document.querySelector(".lista_de_musicas");
let lista_de_favoritos = [];

function MostrarLista() {
  lista_de_musicas.innerHTML = "";
  for (
    let posicao_array = 0;
    posicao_array < array_musicas.length;
    posicao_array++
  ) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${array_musicas[posicao_array].nome}</h3>
        <p>${array_musicas[posicao_array].descricao}</p>
        <a href = "${array_musicas[posicao_array].link}" target="_blank">Link do jogo</a>
        <img width = "100px" src = "${array_musicas[posicao_array].imagem}">
       <button onclick="RemoverElemento(${posicao_array})">
       Remover</button>
        <button onclick="FavoritarElemento(${posicao_array})"> Adicionar aos favoritos
       </button>

       `;
    lista_de_musicas.appendChild(div);
  }
}

function RemoverElemento(indice) {
  array_musicas.splice(indice, 1);
  localStorage.setItem("musicas", JSON.stringify(array_musicas));
  MostrarLista();
}

function FavoritarElemento(indice) {
  alert("Adicionado aos favoritos!");
  let favoritada = array_musicas.splice(indice, 1);
  lista_de_favoritos.push(lista_de_favoritos);
  localStorage.setItem("favoritos", JSON.stringify(lista_de_favoritos));
}

MostrarLista();
