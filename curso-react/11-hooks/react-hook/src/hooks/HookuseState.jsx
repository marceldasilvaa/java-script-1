import { useState } from "react";

const HookuseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João Cardoso";

    setName("Matheus Battisti");

    console.log(userName)
  };
  
  console.log(name)

  return (
    <div>
      {/* {1 - useState} */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      <hr />
    </div>
  );
};

export default HookuseState;
