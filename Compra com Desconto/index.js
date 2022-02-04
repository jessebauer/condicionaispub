//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let desconto = null;

if (tipoDePagamento == "credito") {
    desconto = 0.95
} else if (tipoDePagamento == "cheque") {
    desconto = 0.97
} else if (tipoDePagamento == debito || tipoDePagamento == "dinheiro") {
    desconto = 0.9
}
let valorComDesconto = (valorDoProduto * desconto) / 100;
console.log(`Valor a ser pago: R$${valorComDesconto.toFixed(2)}`)