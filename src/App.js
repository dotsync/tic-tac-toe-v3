import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Game from './models/Game';

function App() {
  const [game, setGame] = useState(new Game());
  let mockboardWithCells = game.board;
  const [board, setBoard] = useState([...mockboardWithCells]);


  return (
    <div className="App">
      <h1>tic-tac-toe-v3</h1>
      <button onClick={() => {
        game.initializeBoard()
        mockboardWithCells = game.board;
        console.log('mockboardWithCells', mockboardWithCells)
        setBoard([...mockboardWithCells])
        }}>restart</button>
      <Board
        game={game}
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
