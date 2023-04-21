var relogioContainer = document.getElementById("idrelogio")
var h1 = document.getElementById('titulo')
var date
var hours
var minutes
var seconds
var hour
var minute
var second
//Função para criar e mostrar o relogio
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

var data
var dia
var mes
var ano
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
var historico = {}

//Função para consultar data atual e retornar uma string da data atual --------------------------20/Abril/2023-------------------------------
function pickData(){
  data = new Date()
  dia = data.getDate()
  mes = data.getMonth() 
  ano = data.getFullYear()
  console.log(`Dia: ${dia}/${meses[mes]}/${ano}`)  
  
  return (`Dia: ${dia}/${meses[mes]}/${ano}`)
  
}

//Função para chamar a função geHours a cada 1 segundo para atualizar o relogio dinamicamente
setInterval(() => {
  getHours()
}, 1000)

const botao = document.getElementById('botaoConfirmar')
botao.addEventListener('click',registrar)


//Função para registrar o ponto da pessoa, quando ela apertar o botao
function registrar(){
  
  alert(`Registrado com sucesso! ${hour}:${minute}:${second}`)
  
  if(h1.textContent=="Entrada"){
    console.log(`Entrada - ${hour}:${minute}:${second}`) 
    historico = {
      Hdata: pickData(),
      Hhora: `Entrada - ${hour}:${minute}:${second}`
    }
    requestPOST()
  }
  if(h1.textContent=="Pausa"){
    console.log(`Pausa - ${hour}:${minute}:${second}`) 
    historico = {
      Hdata: pickData(),
      Hhora: `Pausa - ${hour}:${minute}:${second}`
    }
    requestPOST()
  }
  if(h1.textContent=="Volta"){
    console.log(`Volta - ${hour}:${minute}:${second}`) 
    historico = {
      Hdata: pickData(),
      Hhora: `Volta - ${hour}:${minute}:${second}`
    }
    requestPOST()
  }
  if(h1.textContent=="Saida"){
    console.log(`Saida - ${hour}:${minute}:${second}`) 
    historico = {
      Hdata: pickData(),
      Hhora: `Saida - ${hour}:${minute}:${second}`
    }
    requestPOST()
  }
  var dadosHistorico = JSON.stringify((historico))
  sessionStorage.setItem('chaveHistorico',dadosHistorico)
  console.log(historico)

  setTimeout(function(){
    window.location.href='home.html'
  },5000)
}

function requestPOST(){
  var requestURL = 'http://localhost:3000/usuario'

  var request = new XMLHttpRequest()

  request.open('POST',requestURL)
  request.responseType = 'json'

  request.send()
  request.onload = function(){
      historico
  }
}
