var a = parseFloat(prompt(`Digite o valor(numérico) da variável A:`));
var b = parseFloat(prompt(`Digite o valor(numérico) da variável B:`));
var troca;

troca = a;
a = b;
b = troca;

document.write (`O novo valor de A é ${troca}.`);
document.write (`<br>O novo valor de B é ${troca}.`);