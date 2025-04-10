import React from 'react';
import './EquipoTalentoLab.css'; // Importamos el archivo de estilos para este componente

// Definimos el componente funcional EquipoTalentoLab
function EquipoTalentoLab({ equipo }) {
  // La prop 'equipo' es un array de objetos con la información de cada miembro

  return (
    <div className="equipo-container">
      <h2>Nuestro Equipo</h2>
      <div className="miembros-grid">
        {/* Iteramos sobre cada miembro del equipo */}
        {equipo.map((miembro, index) => (
          <div className="tarjeta-miembro" key={index}>
            {/* La 'key' es importante en React para el seguimiento de los elementos en listas */}
            <img
              src={miembro.imagen}
              alt={miembro.nombre}
              className="foto-miembro"
            />
            <h3>{miembro.nombre}</h3>
            <p className="rol-miembro">{miembro.rol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EquipoTalentoLab;