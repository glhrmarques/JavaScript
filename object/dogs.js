let dogs = {
    nome: 'Ragnar',
    peso: 15,
    engordar(p=0){
        this.peso += p
    }
}

dogs.engordar(10)
console.log(`${dogs.nome} está com ${dogs.peso} k.g`)
