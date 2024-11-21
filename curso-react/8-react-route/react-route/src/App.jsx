import "./App.css";

// import rotas react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
          {/* 2 - links com react router */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - rota dinamica */}
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
