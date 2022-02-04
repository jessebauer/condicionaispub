const nota = 8.5;
let conceito;

if (nota < 4) {
    conceito = "E";
} else if (nota <= 5.9) {
    conceito = "D";
} else if (nota <= 7.9) {
    conceito = "C";
} else if (nota <= 8.9) {
    conceito = "B";
} else if (nota <= 10) {
    conceito = "A";
}

console.log(`O estudando obteve conceito ${conceito}`)