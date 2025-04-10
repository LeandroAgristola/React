import { useState } from 'react';
import './ItemCount.css';


function ItemCount({stock, nombreDelProducto, contador, setContador}){ 
  


  function modificarContador(operacion){
    if(operacion === '+'){
      if(contador < stock){
        setContador(contador + 1);
      }
      else{
        alert("No hay mas stock disponible");
      }
      
    }else{
      if(contador > 0){
        setContador(contador - 1);
      }
    }
    
    
  };
 
  return (
      <div className='botonCompleto'>
        <div className='items'>
          <button className='btn' onClick={() => modificarContador('-')}>-</button>
          <p>{contador}</p>
          <button className='btn' onClick={() => modificarContador('+')}>+</button>
        </div>
        {/* <button className='btn' style={{with: '15rem'}} onClick={() => agregarAlCarrito()}>Agregar al carrito</button> */}
      </div>
      

  );
  

};
export default ItemCount;