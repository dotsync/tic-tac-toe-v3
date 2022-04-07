import React from 'react'
import { Constants } from '../../models/Constants'
import Cell from '../../models/Cell'

export default function CellComponent({
  board, setBoard, cellState, game,
  rowIdx, colIdx, playerTurn, setPlayerTurn,
  setHasWinner, setTitle
}) {

  const handleClick = () => {
    if (playerTurn === Constants._user && board[rowIdx][colIdx]['cellState'] === Constants._empty) {
      try {
        // update state and instance
        const newCell = new Cell(rowIdx, colIdx, Constants._user)
        const updatedGameBoard = board
        updatedGameBoard[rowIdx][colIdx] = newCell
        setBoard([...updatedGameBoard])
        game.move(newCell, Constants._user)
        // if no more moves and did not win, game is a draw
        if (game.getEmptyCells().length < 1 && !game.isWinning(Constants._user) && !game.isWinning(Constants._user)) {
          setHasWinner('Draw')
          setPlayerTurn('')
          setTitle('New Game?')
        }
        // if user wins
        else if (game.isWinning(Constants._user)) {
          setHasWinner('Player Wins!')
          setPlayerTurn('')
          setTitle('New Game?')
        } else {
          // swap turns
          setPlayerTurn(Constants._computer)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
  
  return (
    <button onClick={handleClick} className="cell">
      {cellState}
    </button>
  )
}
