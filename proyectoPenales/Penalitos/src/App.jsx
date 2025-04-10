import { useState } from 'react';
import StartScreen from './components/StartScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState({ player1: '', player2: '' });

  const startGame = (player1, player2) => {
    setPlayers({ player1, player2 });
    setGameStarted(true);
  };

  return (
    <div className="app">
      {!gameStarted ? (
        <StartScreen onStart={startGame} />
      ) : (
        <div>
          <h2>¡Bienvenidos {players.player1} y {players.player2}!</h2>
          {/* Acá va el resto del juego (próxima etapa) */}
        </div>
      )}
    </div>
  );
}

export default App;