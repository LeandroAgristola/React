import React from 'react';
import './ListaProductos.css';

const productosIniciales = [
  { id: 1, nombre: 'Laptop', precio: 1200 },
  { id: 2, nombre: 'Mouse Inalámbrico', precio: 25 },
  { id: 3, nombre: 'Teclado Mecánico', precio: 75 },
  { id: 4, nombre: 'Monitor 27"', precio: 300 },
];

// Componente funcional ListaProductos que recibe props para agregar, disminuir y el carrito
function ListaProductos({ onAgregarAlCarrito, onDisminuirDelCarrito, carrito }) {
  return (
    <div className="lista-productos-container">
      <h2>Productos Disponibles</h2>
      <ul className="productos-lista">
        {productosIniciales.map(producto => {
          // Verificamos si este producto está en el carrito
          const productoEnCarrito = carrito.find(item => item.id === producto.id);

          return (
            <li key={producto.id} className="producto-item">
              <span>{producto.nombre}</span>
              <span>${producto.precio}</span>
              {productoEnCarrito ? (
                // Si el producto está en el carrito, mostramos los botones de cantidad
                <div className="cantidad-control">
                  <button onClick={() => onDisminuirDelCarrito(producto)}>-</button>
                  <span>{productoEnCarrito.cantidad}</span>
                  <button onClick={() => onAgregarAlCarrito(producto)}>+</button>
                </div>
              ) : (
                // Si el producto no está en el carrito, mostramos el botón de agregar
                <button onClick={() => onAgregarAlCarrito(producto)}>Agregar al Carrito</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListaProductos;