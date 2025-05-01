// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Importamos los estilos para el footer

// Componente funcional Footer
function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Mi Tienda Online</p>
    </footer>
  );
}

export default Footer;