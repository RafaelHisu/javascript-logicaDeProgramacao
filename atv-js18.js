var produto = parseFloat(prompt(`Insira o valor do produto.`));
var margem = parseFloat(prompt(`Insira o valor da margem de lucro.`));
var calculo;

if (produto > 0) {
    var porcentagem = margem / 100;
    calculo = produto * porcentagem;
    resposta = produto + calculo;

    document.write (`O preço de venda do procuto é ${resposta}.`);
}