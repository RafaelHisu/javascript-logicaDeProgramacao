var n = parseInt(prompt(`Insira um valor de 1 a 100:`));


if (n >= 100 || n <= 0) {
    alert(`Informe um número de 1 a 100.`);
    erro();
}

while (n <= 100) {
    document.write (` <br> ${n}`);
    n++;
}



