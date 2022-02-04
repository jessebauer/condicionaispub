const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos < 2855970) {
    console.log(" VAZA LEÃO! JÁ TÁ DIFICL SEM VOCÊ")
} else {
    console.log("PEGA LEÃO")
}