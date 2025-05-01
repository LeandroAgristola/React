import React from 'react';
import './ListaProductos.css';

function ListaProductos({ productos, onAgregarAlCarrito, onDisminuirDelCarrito, carrito }) {
  return (
    <div className="lista-productos-container">
      <h2 className="titulo-productos">Productos Disponibles</h2>
      <div className="productos-grid">
        {productos.map(producto => {
          const productoEnCarrito = carrito.find(item => item.id === producto.id);

          return (
            <div key={producto.id} className="producto-card">
              <div className="producto-imagen">
                {producto.imagen && (
                  <img src={producto.imagen} alt={producto.nombre} />
                )}
              </div>
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p className="precio">${producto.precio}</p>
                {productoEnCarrito ? (
                  <div className="cantidad-control">
                    <button onClick={() => onDisminuirDelCarrito(producto)}>-</button>
                    <span>{productoEnCarrito.cantidad}</span>
                    <button onClick={() => onAgregarAlCarrito(producto)}>+</button>
                  </div>
                ) : (
                  <button className="agregar-boton" onClick={() => onAgregarAlCarrito(producto)}>
                    Agregar al Carrito
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListaProductos;

