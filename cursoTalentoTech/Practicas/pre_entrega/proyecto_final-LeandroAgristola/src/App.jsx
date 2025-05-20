import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Login from './pages/Login';
import Cart from './components/Cart';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>  {/* <-- PROTEGER RUTA */}
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App