var n = parseInt(prompt(`Insisira um valor:`));
var n1 = parseInt(prompt(`Insira um segundo valor:`));

if (n > n1) {
    document.write (`O número ${n} é maior que o número ${n1}.`)
}

if (n1 > n) {
    document.write (`O número ${n1} é maior que o número ${n}.`);
}

if (n == n1) {
    document.write (`Os números ${n} e ${n1} são iguais.`);
}