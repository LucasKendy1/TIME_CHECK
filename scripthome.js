import nome from "./script.js"

var nomeDisplay = document.getElementById('idnome')
var containerSlide = document.getElementById('idslide')
var containerH1 = document.getElementById('idh1')
var containerHistorico = document.getElementById('idhistory')
var containerMenu = document.getElementById('idmenu')
var containerMain = document.getElementById('idmain')

containerSlide.addEventListener('click',abrirHistorico)
containerHistorico.addEventListener('click',abrirHistorico)
containerMenu.addEventListener('click',abrirMenu)

nomeDisplay.innerHTML=nome

function abrirHistorico(){
    if(containerH1.style.height=='90vh'){
        containerH1.style.height='65px'
        containerSlide.style.transform='rotate(0deg)'
    }
    else{
        containerH1.style.height='90vh'
        containerSlide.style.transform='rotate(180deg)'
    }
}

function abrirMenu(){
    var containerAba = document.createElement('div')
    containerAba.setAttribute('id','aba')
    containerMain.appendChild(containerAba)
    containerAba.style.width='80%'
    containerAba.style.height='100%'
    containerAba.style.backgroundColor='white'
    containerAba.innerHTML=`aaaa`
}
