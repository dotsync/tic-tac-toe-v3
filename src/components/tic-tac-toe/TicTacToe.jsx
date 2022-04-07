import { useState } from 'react';
import './TicTacToe.css';
import Board from './Board';
import Game from '../../models/Game';

function TicTacToe() {
  const [game, setGame] = useState(new Game());
  let mockboardWithCells = game.board;
  const [board, setBoard] = useState([...mockboardWithCells]);

  return (
    <div className="tic-tac-toe">
      <h1>tic-tac-toe-v3</h1>
      <Board
        game={game}
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default TicTacToe;
