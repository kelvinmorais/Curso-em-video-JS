
var horapc = new Date()
var minutospc = new Date()
var segundospc = new Date()

var hora = horapc.getHours()
var minutos = minutospc.getMinutes()
var segundos = segundospc.getSeconds()

console.log(`Agora é exatamente ${hora}:${minutos}:${segundos}.`)

if (hora >=6 && hora <=12){
    console.log("Bom dia")
} else if (hora >12 && hora <= 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}