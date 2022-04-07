import { useState } from 'react';
import './TicTacToe.css';
import Board from './Board';
import Game from '../../models/tic-tac-toe-models/Game';
import { Constants } from '../../models/tic-tac-toe-models/Constants';

function TicTacToe() {
  const [game, setGame] = useState(new Game());
  const [playerTurn, setPlayerTurn] = useState(Constants._computer);
  let mockboardWithCells = game.board;
  const [board, setBoard] = useState([...mockboardWithCells]);

  return (
    <div className="tic-tac-toe">
      <Board
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        game={game}
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default TicTacToe;
