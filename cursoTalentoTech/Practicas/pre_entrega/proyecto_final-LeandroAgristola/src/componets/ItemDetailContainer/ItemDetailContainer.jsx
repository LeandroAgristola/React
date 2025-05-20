import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductoById } from '../services/api'; // Importar la función del servicio

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Obtiene el 'id' de la URL

  useEffect(() => {
    setCargando(true);
    setError(null);
    getProductoById(id)
      .then(res => setProducto(res.data))
      .catch(err => {
        console.error(`Error fetching producto con id ${id}:`, err);
        setError('Error al cargar el producto.');
      })
      .finally(() => setCargando(false));
  }, [id]); // Vuelve a ejecutar si el id cambia

  if (cargando) return <p className="text-center py-5">Cargando detalle del producto...</p>;
  if (error) return <p className="text-danger text-center py-5">{error}</p>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;