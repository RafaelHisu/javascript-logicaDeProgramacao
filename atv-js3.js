var n = Number(prompt(`Insira um número:`));
var n1 = Number(prompt(`Insira um número novamente:`));
var n2 = Number(prompt(`Insira um número pela última vez:`));

if (n > n1 && n > n2) {
    document.write (`${n} é o maior número.`);
} else if (n1 > n && n1 > n2) {
    document.write (`${n1} é o maior número.`);
} else if (n2 > n && n2 > n1) {
    document.write (`${n2} é o maior número.`);
}