import React from 'react';
import './CarritoCompras.css';

// Componente funcional CarritoCompras que recibe las props 'carrito' y 'onVaciarCarrito'
function CarritoCompras({ carrito, onVaciarCarrito }) {
  return (
    <div className="carrito-compras-container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <> {/* Fragment para agrupar elementos */}
          <ul className="carrito-lista">
            {carrito.map(item => (
              <li key={item.id} className="carrito-item">
                <span>{item.nombre}</span>
                <span>Cantidad: {item.cantidad}</span>
                <span>Precio: ${item.precio * item.cantidad}</span>
              </li>
            ))}
          </ul>
          <button className="vaciar-carrito-boton" onClick={onVaciarCarrito}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
}

export default CarritoCompras;