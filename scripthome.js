var nome
var dadosArquivados = JSON.parse(sessionStorage.getItem('chave'))
var nomeDisplay = document.getElementById('idnome')
var containerSlide = document.getElementById('idslide')
var containerH1 = document.getElementById('idh1')
var containerHistorico = document.getElementById('idhistory')
var containerMenu = document.getElementById('idmenu')
var containerMain = document.getElementById('idmain')
var header = document.querySelector('header')
var main = document.querySelector('main')
var h2 = document.querySelector('h2')
var h1 = document.querySelector('h1')
var fotoPerfil = document.getElementById('idfoto')

console.log(dadosArquivados)

containerSlide.addEventListener('click',abrirHistorico)
containerHistorico.addEventListener('click',abrirHistorico)
containerMenu.addEventListener('click',abrirMenu)
header.addEventListener('click',abrirHeader)

nomeDisplay.innerHTML=nome
h1.innerHTML=dadosArquivados

function abrirHistorico(){
    if(containerH1.style.height=='85vh'){
        containerH1.style.height='65px'
        containerSlide.style.transform='rotate(0deg)'
    }
    else{
        containerH1.style.height='85vh'
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

function abrirHeader(){
    header.style.transition='1s'
    if(header.style.height=='90vh'){
        header.style.height='10.5vh'
        header.style.backgroundColor='#f25044'
        containerH1.style.display='block'
        containerSlide.style.display='block'
        main.style.display='block'
        h2.innerHTML='Bem-vindo de volta!'
        h2.style.marginTop='10px'
        h1.style.marginTop='0px'
        header.style.padding='20px'
        fotoPerfil.style.width='100px'
        fotoPerfil.style.height='100px'
        h1.style.marginTop='10px'
        h1.style.transform='translateX(0px)'
    }
    else{
        header.style.height='90vh'
        header.style.backgroundColor='#233c4d'
        containerH1.style.display='none'
        containerSlide.style.display='none'
        main.style.display='none'
        h2.innerHTML='Ola!'
        h1.style.marginTop='50px'
        h1.style.transform='translateX(-10vw)'
        header.style.padding='45px'
        fotoPerfil.style.width='200px'
        fotoPerfil.style.height='200px'
    }
}

