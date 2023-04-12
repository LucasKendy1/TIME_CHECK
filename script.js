var inputEmail = document.getElementById('idemail')
var inputSenha = document.getElementById('idpass')

function verificarUsers(){
    var requestURL = 'https://raw.githubusercontent.com/LucasKendy1/TIME_CHECK/main/users.json'

    var request = new XMLHttpRequest()

    request.open('GET',requestURL)
    request.responseType = 'json'

    request.send()
    request.onload = function(){
        var jsonobj = request.response
        console.log(jsonobj)
        console.log(inputEmail.value)
        console.log(inputSenha.value)
        verificarCredenciais(jsonobj)
    }
}

function verificarCredenciais(objeto){
    var users = objeto['usuarios']
    for(var i=0; i<users.length; i++){
        console.log(users[i].email)
        if(inputEmail.value==users[i].email){
            console.log('email correspondente')
            if(inputSenha.value==users[i].senha){
                console.log('senha correspondente')
                window.location.href='carregamento.html'
            }
            else{
                console.log('senha invalida')
            }
        }
        else{
            console.log('email nao correspondente')
        }
    }
}
