let amigo = {nome: 'Renan', 
sexo: 'M', 
peso: 98,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(10)
console.log(`${amigo.nome} lanchou no moura e agora pesa ${amigo.peso}kg.`)