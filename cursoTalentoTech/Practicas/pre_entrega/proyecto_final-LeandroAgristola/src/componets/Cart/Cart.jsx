import { useCart } from '../context/CartContext'

function Cart() {
  const { carrito, vaciarCarrito } = useCart()

  if (carrito.length === 0) {
    return <div className="container py-5"><h2>Tu carrito está vacío</h2></div>
  }

  return (
    <div className="container py-5">
      <h2>Carrito de compras</h2>
      <ul className="list-group mb-3">
        {carrito.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.nombre} x {item.cantidad}
            <span>${item.precio * item.cantidad}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-danger" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </div>
  )
}

export default Cart