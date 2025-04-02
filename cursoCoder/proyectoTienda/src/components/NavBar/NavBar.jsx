import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'; 
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import { Link } from 'react-router';

function NavBar() {
  return (
    <header className='menu'>
      <div className='logo-container'>
        <img className='logo' src="src\assets\logos\Logo_k3D.png" alt="logo" />
      </div>
      <nav className='menu-container' > 
        
        <ul className='itemMenu'>
          <li><Link to="/">Inicio</Link></li>
          {/* <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li> */}
          <li>
            <div>
              <Link to="/carrito"><CartWidget/></Link>
            </div>
          </li>

        </ul>
      </nav>
     
    </header>
  );
}

export default NavBar;
