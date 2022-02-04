const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 18 || possuiPatologia === true || altura < 150 || idade > 65) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante === true) {
    console.log("10 reais, valor da meia entrada")
} else {
    console.log("20 reais")
}