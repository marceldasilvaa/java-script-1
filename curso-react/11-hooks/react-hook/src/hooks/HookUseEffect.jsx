import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo exibido!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dep. vazio
  useEffect(() => {
    console.log("Estou sendo executado apenas uma vez!");
  }, []);

  // 3 - itens no array de dep.
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  //   4 - cleanup no useEffect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Hello World");
    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000);

    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Somar!</button>
      <hr />
      <h2>useEffect com array dependências</h2>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber!
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
