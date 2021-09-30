var idadeGato = 7;
var idade = 0;
var n = 3;
var primeiroAno = 15;
var segundoAno = primeiroAno + 10;
var proximosAnos = segundoAno;

while (n <= 7) {
    proximosAnos = proximosAnos + 4;
    n++
}
document.write (`A idade de uma gato em 7 anos humanos é ${proximosAnos}.`)