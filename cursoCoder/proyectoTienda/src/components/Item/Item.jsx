import './Item.css'
import {Link} from 'react-router';
// import {useState} from 'react';


function Item({producto}){
    // console.log(producto);
    const {id,nombre,precio,descripcion,stock,categoria} = producto;
    // const [contador, setContador] = useState(0);
    

    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad:1
        };
        
     
        console.log('Vas a agregar ', nuevoProducto);
        
    }
    
    return (
        <div className='productos'>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <p>Quedan {stock} disponibles</p> 
            <button className='btn'onClick={()=> agregarAlCarrito(producto)}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button className='btn'>Ver detalle </button>
            </Link>
        </div> 
    );
  };
export default Item

