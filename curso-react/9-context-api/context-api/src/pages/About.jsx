// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  // const { counter } = useContext(CounterContext);

  const { color } = useTitleColorContext();

  const { counter } = useCounterContext();

  return (
    <div>
      <h1 style={{ color: color }}>Sobre</h1>
      <p>Olá, esta é a segunda página do site</p>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
