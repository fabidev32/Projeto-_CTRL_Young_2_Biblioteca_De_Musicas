let atividades_avaliativas = 20;
let trabalhos = 20;
let provas = 40;
let pontos_de_participacao = 5;

let soma_total_das_notas;
let quantidade_de_notas = 4;
let media_final_das_notas;
let situacao_do_aluno;

soma_total_das_notas = atividades_avaliativas + trabalhos + provas + pontos_de_participacao;
media_final_das_notas = soma_total_das_notas / quantidade_de_notas;

if (media_final_das_notas >= 80) {
    situacao_do_aluno = "Aprovado";
} else {
    situacao_do_aluno = "Reprovado";
}

alert(situacao_do_aluno);