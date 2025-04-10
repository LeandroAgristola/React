import React from 'react';
import { Link } from 'react-router-dom'; // Importamos el componente Link
import './Nav.css';

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Inicio</Link></li> {/* Usamos Link para navegar a la ruta '/' */}
        <li><Link to="/productos">Productos</Link></li> {/* Podemos tener otra ruta para solo productos si queremos */}
        <li><Link to="/carrito">Carrito</Link></li> {/* Usamos Link para navegar a la ruta '/carrito' */}
      </ul>
    </nav>
  );
}

export default Nav;