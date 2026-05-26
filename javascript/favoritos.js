let array_favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let lista_de_favoritos = document.querySelector(".lista_de_favoritos");

function MostrarLista() {
  lista_de_favoritos.innerHTML = "";
  for (
    let posicao_array = 0;
    posicao_array < array_favoritos.length;
    posicao_array++
  ) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${array_favoritos[posicao_array].nome}</h3>
        <p>${array_favoritos[posicao_array].descricao}</p>
        <a href = "${array_favoritos[posicao_array].link}" target="_blank">Link do jogo</a>
        <img width = "100px" src = "${array_favoritos[posicao_array].imagem}">
        <button onclick="RemoverDosFavoritos(${posicao_array})"> Remover dos favoritos
       </button>

       `;
    lista_de_favoritos.appendChild(div);
  }
}

function FavoritarElemento(indice) {
  let favoritada = array_favoritos.splice(indice, 1);
  lista_de_favoritos.push(lista_de_favoritos);
  localStorage.setItem("favoritos", JSON.stringify(array_favoritos));
}

MostrarLista();
