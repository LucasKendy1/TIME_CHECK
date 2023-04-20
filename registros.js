var relogioContainer = document.getElementById("idrelogio")
var h1 = document.getElementById('titulo')
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
  
  
  if(h1.textContent=="Entrada"){
    console.log(`Entrada - ${hour}:${minute}:${second}`) 
  }
  if(h1.textContent=="Pausa"){
    console.log(`Pausa - ${hour}:${minute}:${second}`) 
  }
  if(h1.textContent=="Volta"){
    console.log(`Volta - ${hour}:${minute}:${second}`) 
  }
  if(h1.textContent=="Saida"){
    console.log(`Saida - ${hour}:${minute}:${second}`) 
  }
  
}
