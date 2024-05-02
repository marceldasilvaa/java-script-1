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

const chaves = Object.keys(carro);
console.log(chaves);

const valores = Object.values(carro);
console.log(valores);

const tuplas = Object.entries(carro);
console.log(tuplas);

const carro3 = Object.assign(carro);
console.log(carro3);

/*
carro.ano = 2022;
carro.valor = 280000;
carro.consumo = 11;
carro.capacidadeTanque = 50;
delete carro.emplacado;
console.log(carro);
console.log(carro.kmPercorridos());
*/