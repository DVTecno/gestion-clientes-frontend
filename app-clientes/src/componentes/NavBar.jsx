import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Gestión de Clientes</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/">Clientes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/agregar-cliente">Agregar</NavLink>
            </li>
          </ul>
          <form role="search">
            <input className="form-control" type="search" placeholder="Buscar Cliente" aria-label="Buscar Cliente" />
          </form>
        </div>
      </div>
    </nav>
  );
};

