import nome from "./script.js"

var nomeDisplay = document.getElementById('idnome')
var containerSlide = document.getElementById('idslide')
var containerH1 = document.getElementById('idh1')

containerSlide.addEventListener('click',abrirHistorico)

nomeDisplay.innerHTML=nome

function abrirHistorico(){
    if(containerH1.style.height=='90vh'){
        containerH1.style.height='65px'
    }
    else{
        containerH1.style.height='90vh'
    }
}


