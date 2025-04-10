import './CartWidget.css'
import { TbShoppingCart } from "react-icons/tb";
import React  from 'react';


function CartWidget(){
  
    
    return (
      
      <div className='cart'>
        <TbShoppingCart /><p>(5)</p>
      </div>
    );  
}
export default CartWidget