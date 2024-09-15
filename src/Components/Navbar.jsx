import React, { useContext } from 'react';
import { ContextGlobal } from "../Context/GlobalContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={theme === "dark" ? "navbar-dark" : "navbar-light"}>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/favs">Favorites</a></li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
