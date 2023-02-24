let num = [3, 1, 5]

num[3] = 4 //acrescenta o indice 3 com o valor dentro
num.push(2) //cria uma posição no final do indice e incrementa o valor
num.sort() //ordena por ondem de crescimento os valores

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`A posição 4 tem o valor ${num[3]}`)  //lenght atributo que indica quantos elementos possui no vetor
console.log(`Qual indice do numero 3 : ${num.indexOf(3)}`)  //encontra o indice do número desejado, se nã oencontrar retonra -1

for(let ini = 0 ; ini < num.length ; ini++){
    console.log(`a posição ${ini} tem o valor ${num[ini]}`)
} 

for(let ini in num){
    console.log(`a posição ${ini} tem o valor ${num[ini]}`)
}