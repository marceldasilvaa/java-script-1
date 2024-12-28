import { useContext } from "react";
import { SomeContext } from "../hooks/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return <div>
    <h2>useContext</h2>
    <p>Valor do context: {contextValue}</p>
  </div>;
};

export default About;
