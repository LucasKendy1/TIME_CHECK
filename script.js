var inputEmail = document.getElementById('idemail')
var inputSenha = document.getElementById('idpass')

function verificarUsers(){
    fetch("users.json").then((response) => {
        response.json().then((usuarios) => {
            var user = response.usuarios
            console.log(user)
            // for(var i=0; i<usuarios.length; i++){

            // }
        })
    })
}
