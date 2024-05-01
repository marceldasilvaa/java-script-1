const clientes = [['Manoel', 34, true], ['Joao', 35, true], ['Manuela', 24, false]];

clientes.unshift(['Joana', 19, false]);
clientes.unshift(['Ceiça', 30, true]);
clientes.pop();
clientes.shift();
clientes.push(['Manuela', 24, true]);
console.log(clientes[3][2]);