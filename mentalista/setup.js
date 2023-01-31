var numeroSecreto = Math.round(Math.random() * 101)

/*
//OPCAO WHILE
var count = 1
while (palpite != numeroSecreto && count <= 5) {    
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
//OPCAO FOR
for (var i = 1; palpite != numeroSecreto && i <= 5; i++) {
    var palpite = prompt('Digite um nuemro de 1 a 100, voce tem 5 chances')
    if (palpite == numeroSecreto) {
        alert('Voce acertou, o numero secreto é ' + numeroSecreto)        
    }
    else if (palpite > numeroSecreto)  {
        alert('O numero secreto  é menor que o palpite ' + i )        
    }
    else {
    alert('O numero secreto é maior que o palpite ' + i)       
    }
}

alert('Voce nao acertou, o numero secreto era o ' + numeroSecreto) 