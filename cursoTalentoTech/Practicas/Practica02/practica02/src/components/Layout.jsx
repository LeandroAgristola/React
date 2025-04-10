import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import './Layout.css'; // Importamos los estilos para el layout

// Componente funcional Layout que envuelve la estructura principal de la aplicación
function Layout({ children }) {
  // 'children' es una prop especial en React que representa los componentes hijos
  // que se renderizarán dentro de este componente. En nuestro caso, será el 'Main'.

  return (
    <div className="layout-container">
      <Header />
      <Nav />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;