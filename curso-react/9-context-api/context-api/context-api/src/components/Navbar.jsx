import { NavLink } from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/"><p>Home</p></NavLink>
      <NavLink to="/about"><p>Sobre</p></NavLink>
      <NavLink to="/products"><p>Produtos</p></NavLink>
    </nav>
  );
};

export default Navbar;
