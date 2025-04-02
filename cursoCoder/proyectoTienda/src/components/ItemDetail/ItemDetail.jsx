
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';


function ItemDetail({producto, volverAlInicio}){
    // console.log(producto);
    const [contador, setContador] = useState(1);
    const {nombre,precio,descripcion,stock,categoria} = producto;
    
    
    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad:contador,
        };
        console.log('Vas a agregar ', nuevoProducto);
        setContador(1);
        
    };
    
    // const [contador, setContador] = useState(0);
    return (
        <div className='productos'>
            <h2>{nombre}</h2>
            <p>${producto.precio}</p>
            {/* <p>{producto.descripcion}</p> */}
            <p>Quedan {producto.stock} disponibles</p>                
            <ItemCount stock = {stock} contador = {contador} setContador = {setContador}/> 
            <button className='btn' onClick={()=> agregarAlCarrito(producto)}>Agregar al carrito</button>
            <button className='btn'onClick={volverAlInicio}>Volver al incio </button>
        </div> 
    
        
      
    )
  
  
  }
export default ItemDetail