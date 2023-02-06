var pauloObj = {
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}
var rafaObj = {
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}
var guiObj = {
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var elementoTabela = document.getElementById('tabelaJogadores')

exibirTela()

function exibirTela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${pauloObj.nome}</td>
            <td>${pauloObj.vitoria}</td>
            <td>${pauloObj.empate}</td>
            <td>${pauloObj.derrota}</td>
            <td>${pauloObj.pontos}</td>
            <td><button onClick="adicionarVitoria(pauloObj)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(pauloObj)">Empate</button></td>
            <td><button onClick="adicionarDerrota(pauloObj)">Derrota</button></td>
        </tr>
    `
}

function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirTela()
}

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    exibirTela()
}

function adicionarDerrota(jogador) {
    jogador.derrota++
    exibirTela()
}