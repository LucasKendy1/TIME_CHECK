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
var divhistorico

//Informações pessoais recebidas do login
console.log(dadosArquivados)

//Dados de data e hora recebidas das telas de registro
console.log(dadosHistorico)

var HistoricoCompleto 


containerSlide.addEventListener('click',abrirHistorico)
containerHistorico.addEventListener('click',abrirHistorico)
containerMenu.addEventListener('click',abrirMenu)
header.addEventListener('click',abrirHeader)

nomeDisplay.innerHTML=nome
h1.innerHTML=dadosArquivados.nome
console.log(dadosArquivados.cargo)
console.log(dadosArquivados.setor)
console.log(dadosArquivados.email)



function abrirHistorico(){
    if(containerH1.style.height=='85vh'){//se o historico tiver aberto, fecha
        containerH1.style.height='65px'
        containerSlide.style.transform='rotate(0deg)'
        requestGET()
    }
    else{                                //se o historico tiver fechado, abre
        containerH1.style.height='85vh'
        containerSlide.style.transform='rotate(180deg)'
        requestGET()
    }
}
var containerAba
var containerClose
function abrirMenu(){
    containerAba = document.createElement('div')
    containerClose = document.createElement('div')
    containerAba.style.transition='1s'
    containerClose.style.transition='1s'
    containerAba.style.display='block'
    containerClose.style.display='block'
    containerAba.style.width='10vw'
    containerAba.style.height='94.5vh'
    containerAba.style.backgroundColor='white'
    containerAba.style.position='absolute'
    containerAba.style.top='0px'
    containerAba.style.backgroundColor='#f8deb5'
    containerClose.style.width='30vw'
    containerClose.style.height='94.5vh'
    containerClose.style.backgroundColor='white'
    containerClose.style.position='absolute'
    containerClose.style.top='0px'
    containerClose.style.left='70vw'
    containerClose.style.backgroundColor='#30526a7e'
    containerClose.addEventListener('click',fecharMenu)
    main.appendChild(containerAba)
    main.appendChild(containerClose)
    containerAba.style.width='70vw'

    //---------criação dos bag do menu vertical--------------
    var logoImagem = document.createElement('img')
    logoImagem.setAttribute('src','./imagens/TIME_Check_white-removebg-preview.png')
    logoImagem.setAttribute('width','200px')
    containerAba.appendChild(logoImagem)

    var linkPerfil= document.createElement('p')
    linkPerfil.innerHTML='Perfil'
    linkPerfil.addEventListener('click',abrirHeader)
    containerAba.appendChild(linkPerfil)
    linkPerfil.style.color='#F25044'
    linkPerfil.style.fontSize='17pt'
    linkPerfil.style.marginLeft='50px'

    var linkPontos= document.createElement('p')
    linkPontos.innerHTML='Meus Pontos'
    linkPontos.addEventListener('click',abrirHistorico)
    containerAba.appendChild(linkPontos)
    linkPontos.style.color='#F25044'
    linkPontos.style.fontSize='17pt'
    linkPontos.style.marginLeft='50px'

    var linkChat= document.createElement('a')
    linkChat.setAttribute('href','https://chat.whatsapp.com/I71VfpsDMbZEd8pzaDO4qi')
    linkChat.innerHTML='Chat RH<br>'
    containerAba.appendChild(linkChat)
    linkChat.style.color='#F25044'
    linkChat.style.fontSize='17pt'
    linkChat.style.marginLeft='50px'
    
    var linkAjuda= document.createElement('a')
    linkAjuda.innerHTML='Ajuda<br>'
    linkAjuda.setAttribute('href','./ajuda.html')
    containerAba.appendChild(linkAjuda)
    linkAjuda.style.color='#F25044'
    linkAjuda.style.fontSize='17pt'
    linkAjuda.style.marginLeft='50px'

    var configs= document.createElement('button')
    configs.setAttribute('name','Configurações')
    configs.innerHTML="Configurações"
    containerAba.appendChild(configs)
    configs.style.backgroundColor='#f8deb5'
    configs.style.border='none'
    configs.style.color='#F25044'
    configs.style.fontSize='17pt'
    configs.style.marginLeft='50px'

    var sairConta = document.createElement('button')
    sairConta.addEventListener('click',sairdaConta)
    sairConta.innerHTML="Sair da conta"
    containerAba.appendChild(sairConta)
    sairConta.style.backgroundColor='#f25044'
    sairConta.style.color='white'
    sairConta.style.fontSize='17pt'
    sairConta.style.marginLeft='50px'
    sairConta.style.width='80%'
    sairConta.style.height='60px'
    sairConta.style.border='none'
    sairConta.style.borderRadius='10px'
    sairConta.style.position='relative'
    sairConta.style.marginTop='200px'
    sairConta.style.cursor='pointer'

}

function sairdaConta(){
    window.location.href='./login.html'
}

function fecharMenu(){
    containerAba.style.display='none'
    containerClose.style.display='none'
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
        h1.style.transform='translaeX(-10vw)'
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

    //Hierarquia do DOM da apresentação dos dados
    for(var i=0; i<=2; i++){
        let containerDados = document.createElement('div')
        section.appendChild(containerDados)
        containerDados.setAttribute('class','containerDados')
        let containerLabel = document.createElement('div')
        containerDados.appendChild(containerLabel)
        containerLabel.setAttribute('class','containerLabel')
        let containerInfo = document.createElement('div')
        containerDados.appendChild(containerInfo)
        containerInfo.setAttribute('class','containerInfo')
        if(i==0){
            containerLabel.innerHTML = 'E-mail'
            containerInfo.innerHTML = dadosArquivados.email
        }
        if(i==1){
            containerLabel.innerHTML = 'Setor'
            containerInfo.innerHTML = dadosArquivados.setor
        }
        if(i==2){
            containerLabel.innerHTML = 'Cargo'
            containerInfo.innerHTML = dadosArquivados.cargo
        }
    }

    header.appendChild(section)

    //Apresentação dos dados - Estilização no css (usei a cabeça aqui hihi)
    
    
    section.style.position='absolute'
    section.style.width='350px'
    section.style.height='200px'
    section.style.marginTop='30vh'
    section.style.marginLeft='50%'
    section.style.transform='translateX(-70%)'
    var botaoSair= document.createElement('div')
    botaoSair.innerHTML='Sair da conta'
    botaoSair.addEventListener('click',sairConta)
    header.appendChild(botaoSair)
    botaoSair.style.width='300px'
    botaoSair.style.height='60px'
    botaoSair.style.border='none'
    botaoSair.style.borderRadius='10px'
    botaoSair.style.backgroundColor='#f25044'
    botaoSair.style.color='white'
    botaoSair.style.fontSize='17pt'
    botaoSair.style.position='absolute'
    botaoSair.style.marginTop='60vh'
    botaoSair.style.marginLeft='50%'
    botaoSair.style.transform='translateX(-60%)'
    botaoSair.style.display='flex'
    botaoSair.style.justifyContent='space-around'
    botaoSair.style.alignItems='center'
    botaoSair.style.cursor='pointer'
    var spanLogout = document.createElement('span')
    spanLogout.setAttribute('class','material-symbols-outlined')
    spanLogout.textContent="Logout"
    botaoSair.appendChild(spanLogout)
    
}

function esconderSettings(){
    section.style.display='none'
}

function sairConta(){
    window.location.href='./login.html'
}


function requestGET(){
    if(containerH1.style.height=='85vh'){
        var requestURL = 'http://localhost:3000/db'
        var request = new XMLHttpRequest()
        request.open('GET',requestURL)
        request.responseType = 'json'
        request.send()
        request.onload = function(){
            var jsonobj = request.response
            console.log(jsonobj)
            renderizarHistorico(jsonobj)
        }
        
        divhistorico = document.createElement('div')
        divhistorico.style.width='90%'
        divhistorico.style.height='80%'
        
        containerH1.appendChild(divhistorico)
        divhistorico.style.margin='auto'
        divhistorico.style.marginTop='20px'
        divhistorico.style.overflowY='scroll'
    }
    else{
        containerH1.removeChild(divhistorico)
    }
}

function renderizarHistorico(objeto){
    console.log((objeto.horarios).length)   //tamanho do array do historico
    //fazer um for (var i; i<(objeto.horarios).length; i++){
    //  para cada bracket, se o user(historico) for igual a user(home) criar filhos em forma de cards
    //}
    console.log(objeto.horarios[0])
     //trocar por i

    // console.log(printAtual.usuario)
    // console.log(dadosArquivados.nome)
    var printAtual
    for(var i=0; i<(objeto.horarios).length; i++){  //tamanho max do historico      //ver se é menor ou menor igual
        printAtual = objeto.horarios[i]
        if(printAtual.usuario==dadosArquivados.nome){   //se o user do registro for igual ao user logado faça: 
            // alert('deu certo')
            // console.log(objeto.horarios[i])
            // printAtual = objeto.horarios[i]
            console.log(printAtual.horario.Hdata)
            console.log(printAtual.horario.Hhora) 
            //agr tenho q criar filhos para alocar esses dados dentro da divhistorico
            var boxHorarios = document.createElement('div')//caixinha pra deixar bunitu
            
            boxHorarios.style.border='5px solid #f25044'
            boxHorarios.style.width='98%'
            boxHorarios.style.height='90px'
            boxHorarios.style.marginTop='20px'
            boxHorarios.style.backgroundColor="#feb06a" 
            boxHorarios.style.color='#875f3b'
            boxHorarios.style.fontWeight='800'
            boxHorarios.style.display='flex'
            boxHorarios.style.justifyContent='center'
            boxHorarios.style.alignItems='center'
            boxHorarios.style.flexDirection='column'
            var containerPrintData = document.createElement('p')
            var containerPrintHora = document.createElement('p')
            containerPrintData.innerHTML = printAtual.horario.Hdata
            containerPrintHora.innerHTML = printAtual.horario.Hhora
            boxHorarios.appendChild(containerPrintData)
            boxHorarios.appendChild(containerPrintHora)
            divhistorico.appendChild(boxHorarios)
            
        }
    }
}