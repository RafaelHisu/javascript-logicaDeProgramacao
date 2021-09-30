var resultado;

function inicio() {
var escolha = parseInt(prompt(`Escolha uma opção 1.) Somar || 2.) Subtrair || 3.) Multiplicar || 4.) Dividir`));

switch (escolha) {
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisao();
        break;
    default:
        alert(`Por favor, insira um número de 1 a 4.`);
        inicio();
    }
}

function soma() {
    var n = parseFloat(prompt(`Digite um valor para ser somado.`));
    var n1 = parseFloat(prompt(`Valor para a soma:`));

    resultado = n + n1;
    alert (`A soma de ${n} + ${n1} é igual a ${resultado}.`);
    inicio();
}

function subtracao() {
    var n = parseFloat(prompt(`Digite um valor para ser subtraído.`));
    var n1 = parseFloat(prompt(`Valor para a subtração:`));

    resultado = n - n1;
    alert (`A subtração de ${n} - ${n1} é igual a ${resultado}.`);
    inicio();
}

function multiplicacao() {
    var n = parseFloat(prompt(`Digite um valor para ser multiplicado.`));
    var n1 = parseFloat(prompt(`Valor para a multiplicação:`));

    resultado = n * n1;
    alert (`A multiplicação de ${n} x ${n1} é igual a ${resultado}.`);
    inicio();
}

function divisao() {
    var n = parseFloat(prompt(`Digite um valor para ser dividido.`));
    var n1 = parseFloat(prompt(`Valor para a divisão:`));

    resultado = n / n1;
    alert (`A divisão de ${n} ÷ ${n1} é igual a ${resultado}.`);
    inicio();
}
inicio();