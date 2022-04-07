import './App.css'
import TicTacToe from './components/tic-tac-toe/TicTacToe'
import NavBar from './components/Navbar/Navbar'
import LearnTemplatePage from './components/LearnTemplatePage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <TicTacToe />
      {/* <LearnTemplatePage /> */}
    </div>
  )
}

export default App
