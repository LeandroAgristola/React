// src/components/StartScreen.jsx
import { useState } from 'react';

function StartScreen({ onStart }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleStart = () => {
    if (player1.trim() && player2.trim()) {
      onStart(player1, player2);
    } else {
      alert("Por favor ingresá ambos nombres");
    }
  };

  return (
    <div className="start-screen">
      <h1>⚽ Juego de Penales</h1>
      <input
        type="text"
        placeholder="Nombre del Jugador 1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre del Jugador 2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <button onClick={handleStart}>Comenzar</button>
    </div>
  );
}

export default StartScreen;