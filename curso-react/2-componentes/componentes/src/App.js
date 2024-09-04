import './App.css';
import FirstComponent from "./components/FirstComponents.js";
import MyComponent from './components/MyComponent.js';
import TemplateExpressions from "./components/TemplateExpressions.js";
import MyEvents from "./components/Events.js";
import Challenge from "./components/Challenge.js";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <MyEvents />
      <Challenge />
    </div>
  );
}

export default App;
