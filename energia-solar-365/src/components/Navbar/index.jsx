import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#sobre-nos" className="navbar-link">
              Sobre Nós
            </a>
          </li>
          <li className="navbar-item">
            <a href="#por-que-investir" className="navbar-link">
              Por que investir?
            </a>
          </li>
          <li className="navbar-item">
            <a href="#produtos" className="navbar-link">
              Produtos
            </a>
          </li>
          <li className="navbar-item">
            <a href="#orcamento" className="navbar-link">
              Orçamento
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;