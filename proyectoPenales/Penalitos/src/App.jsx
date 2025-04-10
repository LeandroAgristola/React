import { useState } from 'react';
import StartScreen from './components/StartScreen';
import PenaltySetup from './components/PenaltySetup';
import GameTurns from './components/GameTurns';

function App() {
  const [gamePhase, setGamePhase] = useState('start'); // start, strategy1, strategy2, playing
  const [players, setPlayers] = useState({ player1: '', player2: '' });
  const [strategies, setStrategies] = useState({
    player1: null,
    player2: null,
  });

  const startGame = (player1, player2) => {
    setPlayers({ player1, player2 });
    setGamePhase('strategy1');
  };

  const handleStrategySubmit = (penalties) => {
    const formatted = {
      shoot: penalties.map(p => p.shoot),
      defend: penalties.map(p => p.save),
    };
  
    if (gamePhase === 'strategy1') {
      setStrategies(prev => ({ ...prev, player1: formatted }));
      setGamePhase('strategy2');
    } else if (gamePhase === 'strategy2') {
      setStrategies(prev => ({ ...prev, player2: formatted }));
      setGamePhase('playing');
    }
  };
  

  return (
    <div className="app">
      {gamePhase === 'start' && <StartScreen onStart={startGame} />}

      {gamePhase === 'strategy1' && (
        <PenaltySetup
          currentPlayer={players.player1}
          onConfirm={handleStrategySubmit}
        />
      )}

      {gamePhase === 'strategy2' && (
        <PenaltySetup
          currentPlayer={players.player2}
          onConfirm={handleStrategySubmit}
        />
      )}

      {gamePhase === 'playing' && (
        <GameTurns players={players} strategies={strategies} />
      )}
      
    </div>
  );
}

export default App;
