import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <span>Agenda Telefonica</span>
      <input className="search" placeholder="Pesquisar"/>
      <button className="btn-cad">Cadastrar</button>
    </nav>
  );
}

export default Navbar;
