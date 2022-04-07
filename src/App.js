import './App.css';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TicTacToe />
    </div>
  );
}

export default App;
