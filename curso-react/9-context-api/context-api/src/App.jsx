// components
import Navbar from "./components/Navbar";

// hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Context API</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
