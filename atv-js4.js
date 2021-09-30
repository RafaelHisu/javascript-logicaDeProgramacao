var n = +prompt("Insira um valor:");
var n1 = +prompt("Insira um 2º valor:");
var n2 = +prompt("Insira um 3º valor:");
var soma = 0;
var resultado = 0;

if (n > n1 && n > n2 && n1 > n2) {
    resultado = n + n1;
}
if (n1 > n && n1 > n2 && n > n2) {
    resultado = n1 + n;
}
if (n2 > n && n2 > n1 && n > n1) {
    resultado = n2 + n; 
}
if (n > n1 && n > n2 && n2 > n1) {
    resultado = n + n2; 
}
if (n1 > n && n1 > n2 && n2 > n) {
    resultado = n1 + n2;
}
if (n2 > n && n2 > n1 && n1 > n) {
    resultado = n2 + n1;
}

document.write (`${resultado} é o resultado dos dois maiores números informados.`)