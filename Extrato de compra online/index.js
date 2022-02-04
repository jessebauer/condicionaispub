//valor do produto comprado CENTAVOS
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago REAIS
const valorPago = 300;

console.log(`Restam ${10 - (30000 * 10 / 100000)} parcelas de R$${(valorDoProduto / (quantidadeDoParcelamento * 100))}`);