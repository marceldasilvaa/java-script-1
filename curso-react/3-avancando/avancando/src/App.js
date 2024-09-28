import logo from './logo.svg';
import './App.css';
import Aurora from "./assets/aurora-boreal.png";
import MaganeData from './components/MaganeData';
import ListRender from "./components/ListRender";
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Marcel";
  const [userName] = useState("Matheus");

  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* adicionando imagens com o public */}
      <div>
        <img src="/aurora-boreal.png" alt="Aurora Boreal" />
      </div>
      {/* adicionando imagens em assets */}
      <div>
        <img src={Aurora} alt="Aurora Boreal" />
      </div>
      <MaganeData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="Volvo" km={100000} cor="Preto" newCar={false}/>
      {/* reaproveitando componentes */}
      <CarDetails brand="Mercedes" km={0} cor="Cinza" newCar={true}/>
      <CarDetails brand="Ford" km={50000} cor="Roxo" newCar={false}/>
    </div>
  );
}

export default App;
