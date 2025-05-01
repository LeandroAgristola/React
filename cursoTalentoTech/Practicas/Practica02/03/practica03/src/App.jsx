import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ListaProductos from './components/ListaProductos';
import CarritoCompras from './components/CarritoCompras';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Cargar productos desde MockAPI
  useEffect(() => {
    fetch('https://6812a437129f6313e20f2315.mockapi.io/productos') // Reemplazá con tu URL real
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito];
    const productoExistenteIndex = nuevoCarrito.findIndex(item => item.id === producto.id);

    if (productoExistenteIndex !== -1) {
      nuevoCarrito[productoExistenteIndex].cantidad++;
    } else {
      nuevoCarrito.push({ ...producto, cantidad: 1 });
    }

    setCarrito(nuevoCarrito);
  };

  const disminuirDelCarrito = (producto) => {
    const nuevoCarrito = [...carrito];
    const productoExistenteIndex = nuevoCarrito.findIndex(item => item.id === producto.id);

    if (productoExistenteIndex !== -1) {
      if (nuevoCarrito[productoExistenteIndex].cantidad > 1) {
        nuevoCarrito[productoExistenteIndex].cantidad--;
      } else {
        nuevoCarrito.splice(productoExistenteIndex, 1);
      }
      setCarrito(nuevoCarrito);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              cargando ? (
                <p>Cargando productos...</p>
              ) : (
                <ListaProductos 
                  productos={productos}
                  onAgregarAlCarrito={agregarAlCarrito}
                  onDisminuirDelCarrito={disminuirDelCarrito}
                  carrito={carrito}
                />
              )
            } 
          />
          <Route 
            path="/carrito" 
            element={
              <CarritoCompras 
                carrito={carrito} 
                onVaciarCarrito={vaciarCarrito} 
              />
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
