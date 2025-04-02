import './CartWidget.css';
import { FaCartShopping } from "react-icons/fa6";

function CartWidget({ cantidad }) {

  return (
    <>
      <FaCartShopping color="blue" />
      <p>{cantidad}</p>
    </>
  );
};

export default CartWidget;