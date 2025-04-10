// src/components/ProgressBar.jsx

function ProgressBar({ currentTurn, totalRounds }) {
    return (
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {[...Array(totalRounds)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: index < currentTurn ? '#4caf50' : '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  }
  
  export default ProgressBar;