import inputEmail from './script.js'
import inputSenha from './script.js'
var requestURL = 'https://raw.githubusercontent.com/LucasKendy1/TIME_CHECK/main/users.json'

var request = new XMLHttpRequest()

request.open('GET',requestURL)
request.responseType = 'json'

var jsonobj
request.send()
request.onload = function(){
    jsonobj = request.response
    exportarObjeto(jsonobj)
}
var meuObjeto
export function exportarObjeto(objeto){
    meuObjeto=objeto
}
export default meuObjeto

export function verificarCredenciais(){
    var users = meuObjeto['usuarios']
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
                inputSenha.style.border='1px solid red'
            }
        }
        else{
            console.log('email nao correspondente')
            inputEmail.style.border='1px solid red'
            inputSenha.style.border='1px solid red'
        }
    }
}