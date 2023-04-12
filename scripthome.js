import pessoa from './script.js'

var nomeDisplay = document.getElementById('idnome')

var requestURL = 'https://raw.githubusercontent.com/LucasKendy1/TIME_CHECK/main/users.json'

var request = new XMLHttpRequest()

request.open('GET',requestURL)
request.responseType = 'json'

request.send()
request.onload = function(){
    var jsonobj = request.response
    console.log(jsonobj)
    carregarNome(jsonobj)
}

function carregarNome(objeto){
    console.log(pessoa)
}