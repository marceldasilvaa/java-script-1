// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - hooks
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  const { counter } = useCounterContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Olá, esta é a página principal do site</p>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      {/* 6 - alterando context complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("YELLOW")}>Amarelo</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
