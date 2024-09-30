import './App.css';
import ShowCarDetails from './components/ShowCarDetails';

function App() {
  const cars = [
    {id: 1, brand: "Volvo", model: "XC-60", newCar: true},
    {id: 2, brand: "Fiat", model: "Fastback", newCar: false},
    {id: 3, brand: "Mercedes", model: "GLC 300", newCar: false}
  ];

  return (
    <div className="App">
      <h1>Desafio CSS e React</h1>
      {cars.map((car) => (
        <ShowCarDetails 
          key={car.id}
          brand={car.brand}
          model={car.model}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
