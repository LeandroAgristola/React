import {useEffect,useState} from 'react';

import './ItemListContainer.css';

import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import {fetchData} from '../../fetchData';
import ItemDetail from '../../ItemDetail/ItemDetail';
function ItemListContainer(){
  
  
  const[loading,setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState([null]);
  const [productoFiltrado, setProductoFiltrado] = useState(null);

  useEffect(() => {
    
    fetchData(false)
    .then(response => {
      setTodosLosProductos(response);
      
      setTimeout(() => {
        setLoading(false);
      }, 500); // Cambia el tiempo según tus necesidades
      setLoading(false);
    }) 
    .catch(error => console.error(error))



    
    setTimeout(() => {
      
      
      setLoading(false);
      
    
    }, 2000); 
  }, []);

  return (
    
    loading ?
      <Loader />
      :
      
      <div>
        <div className='containerProductos'>
          {todosLosProductos.map(el => {
            return(
              <Item key ={el.id} producto ={el} filtrarProducto={setProductoFiltrado}/>
            );
          })}
      
      
        </div>
        {
          productoFiltrado && <ItemDetail producto={productoFiltrado} volverAlInicio={()=> setProductoFiltrado(null)}/>
        }
      </div>
    
  );
};
export default ItemListContainer
