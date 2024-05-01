const carro = {
    nome: 'GLC 250',
    marca: 'Mercedes',
    cor: 'Cinza',
    ano: '2020',
    emplacado: true,
    motor: {
        cavalos: 200,
        cilindras: 2.0
    }
};

carro.ano = 2022;
console.log(carro.nome);
console.log(carro.cor);
console.log(carro.ano);
console.log(carro.motor.cavalos);
console.log(carro.motor.cilindras);