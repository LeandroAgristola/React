import { useState } from 'react';
import VisualArco from './VisualArco';
import ProgressBar from './ProgressBar';

function GameTurns({ players, strategies }) {
  const [turnIndex, setTurnIndex] = useState(0);
  const [subTurn, setSubTurn] = useState(0);
  const [results, setResults] = useState([]);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [showResult, setShowResult] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const totalRounds = 5;
  const gameOver = turnIndex >= totalRounds;

  // Validación temprana si no están listas las estrategias
  if (!strategies.player1 || !strategies.player2) {
    return <div>Cargando estrategias...</div>;
  }

  const playTurn = () => {
    const currentPlayer = subTurn === 0 ? 'player1' : 'player2';
    const opponent = subTurn === 0 ? 'player2' : 'player1';

    const shootPosition = strategies[currentPlayer]?.shoot?.[turnIndex];
    const defendPosition = strategies[opponent]?.defend?.[turnIndex];

    if (shootPosition === undefined || defendPosition === undefined) {
      alert('Error: las estrategias no están completas.');
      return;
    }

    const isGoal = shootPosition !== defendPosition;

    const resultText = isGoal
      ? `¡Gol de ${players[currentPlayer]}!`
      : `¡${players[opponent]} atajó el penal!`;

    setLastResult(resultText);
    setShowResult(true);

    if (isGoal) {
      setScores(prev => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1,
      }));
    }

    setResults(prev => [
      ...prev,
      {
        turn: turnIndex + 1,
        player: currentPlayer,
        result: isGoal ? 'Gol' : 'Atajado',
      },
    ]);
  };

  const next = () => {
    setShowResult(false);
    setLastResult(null);

    if (subTurn === 0) {
      setSubTurn(1);
    } else {
      setSubTurn(0);
      setTurnIndex(prev => prev + 1);
    }
  };

  const currentPlayer = subTurn === 0 ? 'player1' : 'player2';
  const opponent = subTurn === 0 ? 'player2' : 'player1';
  const shootPosition = strategies[currentPlayer]?.shoot?.[turnIndex];
  const defendPosition = strategies[opponent]?.defend?.[turnIndex];

  return (
    <div>
      <ProgressBar currentTurn={turnIndex} totalRounds={totalRounds} />
      <h2>Turno {turnIndex + 1}</h2>

      {!gameOver && !showResult && (
        <>
          <p>{players[currentPlayer]} va a patear</p>
          <button onClick={playTurn}>Ejecutar penal</button>
        </>
      )}

      {showResult && shootPosition !== undefined && defendPosition !== undefined && (
        <div>
          <VisualArco
            shootPosition={shootPosition}
            defendPosition={defendPosition}
          />
          <h3>{lastResult}</h3>
          {!gameOver && <button onClick={next}>Siguiente penal</button>}
        </div>
      )}

      {gameOver && (
        <div>
          <h2>🏁 ¡Fin del partido!</h2>
          <h3>
            Resultado final: {players.player1} {scores.player1} - {scores.player2} {players.player2}
          </h3>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h3>Marcador:</h3>
        <p>{players.player1}: {scores.player1}</p>
        <p>{players.player2}: {scores.player2}</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Historial:</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index}>
              Penal {res.turn} - {players[res.player]}: {res.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GameTurns;