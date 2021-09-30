var parcela = parseInt(prompt(`Efetuar compra. Informe a número de parcelas em que deseja:`));

var valor = (8.190 / parcela) 
    
    if (parcela >= 16) {
        alert(`Informe uma parcela de 1 a 15.`)
    } else {
        document.write(`De R$8.190: <br> R$${valor} é o valor que irá pagar o drone em ${parcela}x sem juros.`)
    }


