import logo from './logo.svg';
import './App.css';
import Aurora from "./assets/aurora-boreal.png";
import MaganeData from './components/MaganeData';

function App() {
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
    </div>
  );
}

export default App;
