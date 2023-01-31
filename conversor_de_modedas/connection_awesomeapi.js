//https://docs.awesomeapi.com.br/api-de-moedas./;; b6bbb,
const request = require('request')

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

const opcoes = {
    url: `http://economia.awesomeapi.com.br/last/${moedas}`,
    metodo: 'GET',
    header: {
        'Accept': 'application/jason',
        'Accept-Charset': 'utf-8'
    }   
}

const response_todas = function(erro, res, body) {
    let json = JSON.parse(body)
    console.log(json)
}

const response_dolar = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.USDBRL.bid
    data = json.USDBRL.create_date
    console.log('Dolar($) R$ ' + cotacao + ' em ' + data)
}

const response_euro = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.EURBRL.bid
    data = json.EURBRL.create_date
    console.log('Euro(€) R$ ' + cotacao + ' em ' + data)
} 

request(opcoes, response_euro)