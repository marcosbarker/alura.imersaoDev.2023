var numeroSecreto = Math.round(Math.random() * 101)

/*
var count = 1
while (palpite != numeroSecreto && count < 3) {    
    var palpite = prompt('Digite um nuemro de 1 a 100')
    if (palpite == numeroSecreto) {
        alert('Voce acertou, o numero é ' + numeroSecreto)        
    }
    else if (palpite > numeroSecreto)  {
        alert('O numero secreto  é menor que o palpite ' + count )
        count++
    }
    else if (palpite < numeroSecreto) {
    alert('O numero secreto é maior que o palpite ' + count)
        count++
    }
}
*/
for (var i = 0; palpite != numeroSecreto && i < 3; i++) {
    var palpite = prompt('Digite um nuemro de 1 a 100')
    if (palpite == numeroSecreto) {
        alert('Voce acertou, o numero é ' + numeroSecreto)        
    }
    else if (palpite > numeroSecreto)  {
        alert('O numero secreto  é menor que o palpite ' + i )        
    }
    else if (palpite < numeroSecreto) {
    alert('O numero secreto é maior que o palpite ' + i)       
    }
}