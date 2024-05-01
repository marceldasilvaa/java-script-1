/*
Empresa de desenvolvimento de Software

Programador Junior -> 4mil
Programador Pleno -> 5mil
Programador Senior -> 6mil
Programador Testador -> 5mil
Programador Arquiteto -> 8mil
Programador Analista -> 7mil
Programador Gerente -> 10mil
*/

let cargo

switch (cargo) {
    case 'Programador Junior':
        console.log('O Programador Junior recebe R$4000.')
        break
    case 'Programador Pleno':
        console.log('O Programador Pleno recebe R$5000.')
        break
    case 'Programador Senior':
        console.log('O Programador Senior recebe R$6000.')
        break
    case 'Programador Testador':
        console.log('O Programador Testador recebe R$5000.')
        break
    case 'Programador Arquiteto':
        console.log('O Programador Arquiteto recebe R$8000.')
        break
    case 'Programador Analista':
        console.log('O Programador Analista recebe R$7000.')
        break
    case 'Programador Gerente':
        console.log('O Programador Gerente recebe R$10000.')
        break
    default:
        console.log('Cargo não cadastrado no sistema.')        
}