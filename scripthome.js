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
var dadosHistorico = JSON.parse(sessionStorage.getItem('chaveHistorico'))
var body = document.querySelector('body')

//Informações pessoais recebidas do login
console.log(dadosArquivados)

//Dados de data e hora recebidas das telas de registro
console.log(dadosHistorico)

var HistoricoCompleto 


body.addEventListener('onload',pushHistorico)
containerSlide.addEventListener('click',abrirHistorico)
containerHistorico.addEventListener('click',abrirHistorico)
containerMenu.addEventListener('click',abrirMenu)
header.addEventListener('click',abrirHeader)

nomeDisplay.innerHTML=nome
h1.innerHTML=dadosArquivados.nome
console.log(dadosArquivados.cargo)
console.log(dadosArquivados.setor)
console.log(dadosArquivados.email)

function pushHistorico(){
    HistoricoCompleto.push(dadosHistorico)
    console.log(HistoricoCompleto)
} 

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
    if(header.style.height=='90vh'){                //se ela tiver aberta = fecha
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
        esconderSettings()
    }
    else{                                           //se ela tiver fechada = abre
        header.style.height='87vh'
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
        carregarSettings()
    }
}

var section
function carregarSettings(){
    section = document.createElement('section')
    section.setAttribute('id','sectionDados')
    // section.innerHTML=dadosArquivados.email
    // section.innerHTML+=dadosArquivados.setor
    // section.innerHTML+=dadosArquivados.cargo
    let h3email= document.createElement('h3')
    let h3setor= document.createElement('h3')
    let h3cargo= document.createElement('h3')
    h3email.innerHTML="Email: " + dadosArquivados.email
    h3setor.innerHTML="Setor: " + dadosArquivados.setor
    h3cargo.innerHTML="Cargo: " + dadosArquivados.cargo
    header.appendChild(section)
    section.appendChild(h3email)
    section.appendChild(h3setor)
    section.appendChild(h3cargo)
    section.style.position='absolute'
    section.style.width='350px'
    section.style.height='200px'
    section.style.marginTop='50%'
    var botaoSair= document.createElement('input')
    botaoSair.setAttribute('type', 'button')
    botaoSair.setAttribute('value','Sair da conta')
    botaoSair.addEventListener('click',sairConta)
    header.appendChild(botaoSair)
    botaoSair.style.width='200px'
    botaoSair.style.height='40px'
    botaoSair.style.border='none'
    botaoSair.style.borderRadius='40px'
    botaoSair.style.backgroundColor='#f25044'
    botaoSair.style.color='white'
    botaoSair.style.position='absolute'
    botaoSair.style.marginTop='80%'
    botaoSair.style.cursor='pointer'
}

function esconderSettings(){
    section.style.display='none'
}

function sairConta(){
    window.location.href='./login.html'
}