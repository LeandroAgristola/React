import { useState } from 'react';
import Arco from './Arco';

const POSITIONS = ['izq_sup', 'izq_inf', 'medio', 'der_sup', 'der_inf'];

function PenaltySetup({ currentPlayer, onConfirm }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [penalties, setPenalties] = useState(
    Array(5).fill({ shoot: '', save: '' })
  );

  const handleSelect = (type, pos) => {
    const newPenalties = [...penalties];
    newPenalties[currentStep] = {
      ...newPenalties[currentStep],
      [type]: pos,
    };
    setPenalties(newPenalties);
  };

  const handleNext = () => {
    if (!penalties[currentStep].shoot || !penalties[currentStep].save) {
      alert("Seleccioná una posición para patear y atajar");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleConfirm = () => {
    onConfirm(penalties);
  };

  const currentPenalty = penalties[currentStep];

  return (
    <div className="penalty-setup">
      <h2>{currentPlayer}: Penal {currentStep + 1} de 5</h2>

      <div className="setup-section">
        <h3>🦵 Elegí dónde patear</h3>
        <Arco
          selected={currentPenalty.shoot}
          onSelect={(pos) => handleSelect('shoot', pos)}
        />
      </div>

      <div className="setup-section">
        <h3>🧤 Elegí dónde atajar</h3>
        <Arco
          selected={currentPenalty.save}
          onSelect={(pos) => handleSelect('save', pos)}
        />
      </div>

      <div className="nav-buttons">
        {currentStep > 0 && <button onClick={handleBack}>Atrás</button>}
        {currentStep < 4 ? (
          <button onClick={handleNext}>Siguiente penal</button>
        ) : (
          <button onClick={handleConfirm}>Confirmar estrategia</button>
        )}
      </div>
    </div>
  );
}

export default PenaltySetup;