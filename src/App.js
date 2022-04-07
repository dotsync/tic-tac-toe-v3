import './App.css';
import TicTacToe from './components/tic-tac-toe/TicTacToe';

function App() {
  // const [game, setGame] = useState(new Game());
  // let mockboardWithCells = game.board;
  // const [board, setBoard] = useState([...mockboardWithCells]);

  return (
    <div className="App">
      {/* <h1>tic-tac-toe-v3</h1>
      <Board
        game={game}
        board={board}
        setBoard={setBoard}
      /> */}
      <TicTacToe />
    </div>
  );
}

export default App;
