var n = +prompt(`Insira um valor:`);
var n1 = +prompt(`Insira um valor:`);
var n2 = +prompt(`Insira um valor:`);
var n3 = +prompt(`Insira um valor:`);
var n4 = +prompt(`Insira um valor:`);
var n5 = +prompt(`Insira um valor:`);
var n6 = +prompt(`Insira um valor:`);
var n7 = +prompt(`Insira um valor:`);
var n8 = +prompt(`Insira um valor:`);
var n9 = +prompt(`Insira um valor:`);
var soma = 0;
var valoresinformados = `${n}, ${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}, ${n7}, ${n8}, ${n9}`;

if (n < 40) {
    soma = soma + n;
}
if (n1 < 40) {
    soma = soma + n1;
}
if (n2 < 40) {
    soma = soma + n2;
}
if (n3 < 40) {
    soma = soma + n3;
}
if (n4 < 40) {
    soma = soma + n4;
}
if (n5 < 40) {
    soma = soma + n5;
}
if (n6 < 40) {
    soma = soma + n6;
}
if (n7 < 40) {
    soma = soma + n7;
}
if (n8 < 40) {
    soma = soma + n8;
}
if (n9 < 40) {
    soma = soma + n9;
}

document.write (`${soma} é a soma dos números menores que 40, entre os números: <br> ${valoresinformados}.`);