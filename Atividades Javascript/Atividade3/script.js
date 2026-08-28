let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
let nota4 = document.querySelector("#nota4");
let div_situacao_aluno = document.querySelector(".div_situacao_aluno");

let soma_total_das_notas;
let quantidade_de_notas = 4;
let media_final_das_notas;
let situacao_do_aluno;

function calcularMedia() {

    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let n3 = Number(nota3.value);
    let n4 = Number(nota4.value);

    let quantidade_de_notas = 4;
    let soma_total_das_notas = n1 + n2 + n3 + n4;
    let media_final_das_notas = soma_total_das_notas / quantidade_de_notas;

    let situacao_do_aluno;

    if (media_final_das_notas >= 80) {
        situacao_do_aluno = "Aprovado";
    } else {
        situacao_do_aluno = "Reprovado";
    }
}