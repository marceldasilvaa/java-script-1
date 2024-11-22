import "./App.css";

// import rotas react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
          {/* 2 - links com react router */}
          <Navbar />
          {/* {9 - search} */}
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - rota dinamica */}
            <Route path="/products/:id" element={<Product />} />
            {/* {nested routes} */}
            <Route path="/products/:id/info" element={<Info />} />
            <Route path="/search" element={<Search />} />
            {/* {9 - search} */}
            <Route path="/search" element={<Search />} />
            {/* {redirect} */}
            <Route path="/company" element={<Navigate to="/about" />} />
            {/* {7 - no match found - 404 error} */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
