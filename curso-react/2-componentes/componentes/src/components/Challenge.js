const Challenge = () => {

    const number1 = 10;
    const number2 = 9;

    const somaNumeros = number1 + number2;
    const exibeNumeros = () => {
        console.log(`A soma dos números é: ${somaNumeros}`);
    }

    return (
        <div>
            <h1>Seu primeiro número de chamada é: {number1}</h1>
            <h1>Seu segundo número de chamada é: {number2}</h1>
            <button onClick={exibeNumeros}>Veja a soma dos números aqui!</button>
        </div>
    );
}

export default Challenge;