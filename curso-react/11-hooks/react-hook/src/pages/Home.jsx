// useContext
import { useContext } from "react";
import { SomeContext } from "../hooks/HookUseContext";

import HookUseEffect from "../hooks/HookUseEffect";
import HookuseReducer from "../hooks/HookuseReducer";
import HookuseState from "../hooks/HookuseState";
import HookUseRef from "../hooks/HookUseRef";
import HookUseCallback from "../hooks/HookUseCallback";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookuseState />
      <HookuseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
    </div>
  );
};

export default Home;
