import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { Constants } from './models/Constants';
import Game from './models/Game';

function App() {
  const [game, setGame] = useState(new Game())
  const mockboardWithCells = game.board
  const [board, setBoard] = useState([...mockboardWithCells])


  // const testGame = new Game();
  // const testBoard = testGame.board
  // console.log('testBoard', testBoard)
  // // console.log('empty cells', game.getEmptyCells())
  // console.log(testGame.callMiniMax(0, Constants._computer))


  return (
    <div className="App">
      <h1>tic-tac-toe-v3</h1>
      <Board
        game={game}
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
