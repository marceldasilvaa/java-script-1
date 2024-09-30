import './App.css';
import MyComponents from './components/MyComponents';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>Essa é a seção do css com react!</h1>
      {/* CSS de componente */}
      <MyComponents />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "5px", borderTop: "2px solid red", borderBottom: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* Inline CSS dinâmico */}
      <h2 style={n > 10 ? {background: "black", color: "white"} : {background: "blue", color: "black"}}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? {background: "black", color: "white"} : {background: "blue", color: "black"}}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Matheus" ? {background: "black", color: "white"} : null}>
        Teste nome
      </h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? "redTitle" : "title"}>
        Este título terá classe dinâmica
      </h2>
      {/* modules CSS */}
      <Title />
    </div>
  );
}

export default App;
