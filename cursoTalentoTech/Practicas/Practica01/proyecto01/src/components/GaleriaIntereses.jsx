import React, { useState } from 'react';
import './GaleriaIntereses.css'; // Importamos el archivo de estilos

function GaleriaIntereses({ temas }) {
  // 'temas' es un array de strings con los nombres de los intereses
  const [activeButton, setActiveButton] = useState(null); // Estado para rastrear el botón activo

  const handleClick = (index) => {
    setActiveButton(index === activeButton ? null : index); // Cambia el botón activo al hacer clic
  };

  return (
    <div className="galeria-container">
      <h2>Nuestros Intereses</h2>
      <div className="intereses-botones">
        {temas.map((tema, index) => (
          <button
            key={index}
            className={`interes-boton ${index === activeButton ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {tema}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GaleriaIntereses;