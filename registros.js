var relogioContainer = document.getElementById("idrelogio")
var h1 = document.querySelector('h1')
console.log(h1)
var date
var hours
var minutes
var seconds
var hour
var minute
var second
var getHours = () => {
  date = new Date()
  hours = date.getHours()
  minutes = date.getMinutes()
  seconds = date.getSeconds()
  hour = hours < 10 ? `0${hours}` : hours
  minute = minutes < 10 ? `0${minutes}` : minutes
  second = seconds < 10 ? `0${seconds}` : seconds
  relogioContainer.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
  getHours()
}, 1000)


const botao = document.getElementById('botaoConfirmar')

botao.addEventListener('click',registrar)

function registrar(){

  alert(`Registrado com sucesso! ${hour}:${minute}:${second}`)
  var procuraRegistro = h1.indexOf('entrada')
  if(procuraRegistro!=-1){
    console.log(`Entrada - ${hour}:${minute}:${second}` )
  }
  
}
