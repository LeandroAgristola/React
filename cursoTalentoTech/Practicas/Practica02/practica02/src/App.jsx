import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ListaProductos from './components/ListaProductos';
import CarritoCompras from './components/CarritoCompras';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito];
    const productoExistenteIndex = nuevoCarrito.findIndex(item => item.id === producto.id);

    if (productoExistenteIndex !== -1) {
      // Si el producto existe, incrementamos su cantidad
      nuevoCarrito[productoExistenteIndex].cantidad++;
      setCarrito(nuevoCarrito);
    } else {
      // Si no existe, lo agregamos con cantidad 1
      nuevoCarrito.push({ ...producto, cantidad: 1 });
      setCarrito(nuevoCarrito);
    }
  };

  const disminuirDelCarrito = (producto) => {
    const nuevoCarrito = [...carrito];
    const productoExistenteIndex = nuevoCarrito.findIndex(item => item.id === producto.id);

    if (productoExistenteIndex !== -1) {
      if (nuevoCarrito[productoExistenteIndex].cantidad > 1) {
        // Si la cantidad es mayor que 1, la decrementamos
        nuevoCarrito[productoExistenteIndex].cantidad--;
        setCarrito(nuevoCarrito);
      } else {
        // Si la cantidad es 1, lo eliminamos del carrito
        nuevoCarrito.splice(productoExistenteIndex, 1);
        setCarrito(nuevoCarrito);
      }
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ListaProductos productos={[{ id: 1, nombre: 'Laptop', precio: 1200 }, { id: 2, nombre: 'Mouse Inalámbrico', precio: 25 }, { id: 3, nombre: 'Teclado Mecánico', precio: 75 }, { id: 4, nombre: 'Monitor 27"', precio: 300 }]} onAgregarAlCarrito={agregarAlCarrito} onDisminuirDelCarrito={disminuirDelCarrito} carrito={carrito} />} />
          <Route path="/carrito" element={<CarritoCompras carrito={carrito} onVaciarCarrito={vaciarCarrito} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;