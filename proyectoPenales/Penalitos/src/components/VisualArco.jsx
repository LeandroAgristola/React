// src/components/VisualArco.jsx
function VisualArco({ shootPosition, defendPosition }) {
    const posiciones = [
      'izq-arriba',
      'centro-arriba',
      'der-arriba',
      'izq-abajo',
      'centro-abajo',
      'der-abajo',
    ];
  
    return (
      <div className="arco">
        <div className="linea arco-top"></div>
        <div className="linea arco-lado izq"></div>
        <div className="linea arco-lado der"></div>
  
        <div className="posiciones-grid">
          {posiciones.map((pos, idx) => (
            <div key={idx} className="posicion-slot" style={{ position: 'relative' }}>
              {shootPosition === pos && (
                <div className="pelota" />
              )}
              {defendPosition === pos && (
                <div className="manos" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default VisualArco;