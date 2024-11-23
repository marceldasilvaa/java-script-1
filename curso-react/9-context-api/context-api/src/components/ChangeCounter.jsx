// 3 - alterando contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Click to add counter
    </button>
  );
};

export default ChangeCounter;
