var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#img')

//function carregar(){
   // window.document.write("teste")
//img.src = 'img/almoço2400px.png'
//}

///*
function carregar(){
    
    var diapc = new Date()
    var mespc = new Date()
    var anopc = new Date()
    var diasempc = new Date()
    var horapc = new Date()
    var minpc = new Date()
    var segpc = new Date()
    
    var dia = diapc.getDate()
    var mes = mespc.getMonth()
    var ano = anopc.getFullYear()
    var diasem = diasempc.getDay()
    var hora = horapc.getHours()
    var min = minpc.getMinutes()
    var seg = segpc.getSeconds()
    
    switch (mes){
        case 0: "Janeiro"
            break
        case 1: "Fevereiro"
            break
        case 2: "Marcço"
            break
        case 3: "Abril"
            break
        case 4: "Maio"
            break
        case 5: "Junho"
            break
        case 6: "Julho"
            break
        case 7: "Agosto"
            break
        case 8: "Setembro"
            break
        case 9: "Outubro"
            break
        case 10: "Novembro"
            break
        case 11: "Dezembro"
            break 
        default: "[ERRO] Dia da Semana incorreto"
            break
    }

    switch (diasem){
        case 0: "Domingo"
            break
        case 1: "Terça - Feira"
            break
        case 2: "Terça - Feira"
            break
        case 3: "Quarta - Feira"
            break
        case 4: "Quinta - Feira"
            break
        case 5: "Sexta - Feira"
            break
        case 6: "Sabádo"
            break
        default: "[ERRO] Dia da Semana incorreto"
            break
    }
    
    
    msg.innerHTML = ` ${diasem} ${dia}  ${mes} ${ano} ${hora} ${min} ${seg}`
    
    if (hora >=6 && hora <=12){
        //Bom dia!
        img.src = 'img/cafe400px.png'
        window.document.body.style.background = '#FAFAFA'
    } else if(hora >12 && hora <=18){
       //Bom Dia!
        img.src = 'img/almoço2400px.png'
        window.document.body.style.background = '#A89C96'
    } else {
        //Boa Noite!
        img.src = 'img/Hamburguer3400px.png'
        window.document.body.style.background = '#C26306'
    }
    
    
}  //*/


