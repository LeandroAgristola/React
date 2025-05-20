import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // <-- AÑADIR ESTA LÍNEA

function Item({ producto }) {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <Link to={`/producto/${producto.id}`}> {/* <-- ENLACE EN LA IMAGEN */}
          <img src={producto.imagen} className="card-img-top" alt={producto.nombre} style={{height: '200px', objectFit: 'cover'}}/>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/producto/${producto.id}`} className="text-decoration-none text-dark"> {/* <-- ENLACE EN EL NOMBRE */}
              {producto.nombre}
            </Link>
          </h5>
          <p className="card-text">${producto.precio}</p>
          <button
            className="btn btn-primary mt-auto" // mt-auto para alinear al fondo si los card-body tienen alturas diferentes
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;