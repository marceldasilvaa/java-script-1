import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <MyForm user={{name: "Josias", email: "josias@gmail.com", bio: "Sou um advogado"}} />
    </div>
  );
}

export default App;
