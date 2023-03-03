let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p //this é uma alto referencia ao objeto
}}

amigo.engordar(2) //passando o valor para a função
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
//console.log(typeof amigo)

//array e objeto são objetos, são estruturas da mesma classe, virem da mesma origem.



