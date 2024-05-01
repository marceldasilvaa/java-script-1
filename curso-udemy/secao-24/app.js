const carro = {
    nome: 'GLC 250',
    marca: 'Mercedes',
    cor: 'Cinza',
    ano: '2020',
    emplacado: true,
    motor: {
        cavalos: 200,
        cilindras: 2.0
    },
    kmPercorridos: function() {
        return `O ${carro.nome} percorre ${carro.consumo * carro.capacidadeTanque} KM com um tanque cheio.`;
    }
};

carro.ano = 2022;
carro.valor = 280000;
carro.consumo = 11;
carro.capacidadeTanque = 50;
delete carro.emplacado;
console.log(carro);
console.log(carro.kmPercorridos());