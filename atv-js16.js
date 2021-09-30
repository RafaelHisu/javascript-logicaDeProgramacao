var n = +prompt(`Digite a sua 1ª nota`);
var n1 = +prompt(`Digite a sua 2ª nota`);
var media;

media = ((n + n1) / 2);
if (media >= 7) {
    document.write (`Aprovado, sua média é ${media}.`);
} else {
    document.write (`Reprovado, sua média é ${media}.`);
}