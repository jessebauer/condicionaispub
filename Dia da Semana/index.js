const diaDaSemana = 3;
let diaDaSemanaPorExtenso = null;

if (diaDaSemana == 1) {
    diaDaSemanaPorExtenso = "Segunda-feira";
} else if (diaDaSemana == 2) {
    diaDaSemanaPorExtenso = "Terça-feira";
} else if (diaDaSemana == 3) {
    diaDaSemanaPorExtenso = "Quarta-feira";
} else if (diaDaSemana == 4) {
    diaDaSemanaPorExtenso = "Quinta-feira";
} else if (diaDaSemana == 5) {
    diaDaSemanaPorExtenso = "Sexta-feira";
} else if (diaDaSemana == 6) {
    diaDaSemanaPorExtenso = "Sábado";
} else {
    diaDaSemanaPorExtenso = "Domingo";
}
console.log(diaDaSemanaPorExtenso);