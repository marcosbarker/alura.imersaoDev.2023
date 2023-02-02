
/*
//Aula 01 Alurraflix + opcoes de laço
var filmesList = [
    "http://bancodeseries.com.br/images/posters/17372.jpg",
    "https://ludopedio.org.br/wp-content/uploads/ted-lasso-682x1024.jpeg",
    "https://classic.exame.com/wp-content/uploads/2023/01/Thats-90.jpg?quality=70&strip=info&w=574"
]

for (var index = 0; filmesList.length > index; index++) {
    document.write("<img src=" + filmesList[index] + ">")
}

document.write("<br>")

var count = 0
while (filmesList.length > count) {
    document.write("<img src=" + filmesList[count] + ">")
    count++
}

document.write("<br>")

filmesList.forEach(element => {
    document.write("<img src=" + filmesList[length++] + ">")
});
*/


function addFilmesSeries() {
    var filmesSeries = document.getElementById('filme').value
    var elementListaFilme = document.getElementById('listaFilmes')

    elementListaFilme.innerHTML = elementListaFilme.innerHTML + '<img src=' + filmesSeries + '>'
    document.getElementById('filme').value = ''
}
