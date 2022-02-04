const ladoA = 3;
const ladoB = 3;
let bucha = 1;

if (ladoA === ladoB) {
    if (ladoA === 0) {
        bucha = "Branco"
    } else if (ladoA === 1) {

        bucha = "Ás"
    } else if (ladoA === 2) {

        bucha = "Duque"
    } else if (ladoA === 3) {

        bucha = "Terno"
    } else if (ladoA === 4) {

        bucha = "Quadra"
    } else if (ladoA === 5) {

        bucha = "Quina"
    } else {

        bucha = "Sena";
    }
} console.log(`Sim, e o nome da bucha é ${bucha}`);
