import React from 'react';
import './TarjetaProyecto.css'; // Importamos el archivo de estilos para este componente

// Definimos el componente funcional TarjetaProyecto
function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
  // Recibimos las props: titulo, descripcion y botonTexto

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = () => {
    console.log(`Explorando: ${titulo}`);
  };

  return (
    <div className="tarjeta-proyecto">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button className="boton-proyecto" onClick={handleClick}>
        {botonTexto}
      </button>
    </div>
  );
}

export default TarjetaProyecto;