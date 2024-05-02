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

for(const [chaves, valores] of Object.entries(carro)) {
    console.log(`${chaves} : ${valores}`);
}