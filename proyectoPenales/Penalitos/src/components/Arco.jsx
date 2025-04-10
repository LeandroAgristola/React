function Arco({ selected, onSelect }) {
    return (
      <div className="arco">
        <div className="linea arco-top"></div>
        <div className="linea arco-lado izq"></div>
        <div className="linea arco-lado der"></div>
  
        <div className="posiciones-grid">
          <button
            className={selected === 'izq_sup' ? 'selected' : ''}
            onClick={() => onSelect('izq_sup')}
          >
            ↖️
          </button>
          <button
            className={selected === 'medio' ? 'selected' : ''}
            onClick={() => onSelect('medio')}
          >
            ⭕
          </button>
          <button
            className={selected === 'der_sup' ? 'selected' : ''}
            onClick={() => onSelect('der_sup')}
          >
            ↗️
          </button>
  
          <button
            className={selected === 'izq_inf' ? 'selected' : ''}
            onClick={() => onSelect('izq_inf')}
          >
            ⬅️
          </button>
          <span></span>
          <button
            className={selected === 'der_inf' ? 'selected' : ''}
            onClick={() => onSelect('der_inf')}
          >
            ➡️
          </button>
        </div>
      </div>
    );
  }
  
  export default Arco;
  