let trilho_de_imagens = document.querySelector(".trilho_de_imagens");
let indice = 0;
let total_imagens = 4

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
        //complete com o que deve ser feito
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

// let indice = 0;
// let total_imagens = 4
// const trilho_de_imagens =
//     document.querySelector(".trilho_de_imagens")

function AtualizarCarrossel() {
    const deslocamento = indice * 100;
    trilho_de_imagens.style.transform =
        `translateX(-${deslocamento}%)`;
}



