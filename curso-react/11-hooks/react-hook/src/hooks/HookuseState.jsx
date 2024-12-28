import { useState } from "react";

const HookuseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João Cardoso";

    setName("Matheus Battisti");

    console.log(userName);
  };

  console.log(name);

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* {1 - useState} */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      <hr />
      {/* {2 - useState e input} */}
      <h2>useState e input</h2>
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>Você tem {age} anos!</p>
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookuseState;
