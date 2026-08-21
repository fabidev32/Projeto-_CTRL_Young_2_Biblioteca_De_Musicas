let setaD = document.querySelector(".setaD")
let setaE = document.querySelector(".setaE")
let img01 = document.querySelector(".imgcarrossel01")
let ulc01 = document.querySelector(".ulcarrossel01")

let lenght = ulc01.children.length;

let indice = 0;
function anterior() {
    if (indice === 0) { indice = 0 }
    else { indice = indice - 1 }
    atualizar_carrossel();
}
function posterior() {
    if (indice === lenght - 3) { indice = 0 }
    else { indice = indice + 1 }
    atualizar_carrossel();

}
function atualizar_carrossel() {
    // const deslocamento = indice;
    // translateX(-[$indice]);
    const deslocamento = indice * 95;
    ulc01.style.transform = `translateX(-${deslocamento}%)`;
}

