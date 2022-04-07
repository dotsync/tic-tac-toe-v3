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
        const newCell = new Cell(rowIdx, colIdx, Constants._user)
        const updatedGameBoard = board
        updatedGameBoard[rowIdx][colIdx] = newCell
        setBoard([...updatedGameBoard])
        game.move(newCell, Constants._user)
        if (game.getEmptyCells().length < 1) {
          game.displayBoard()
          setHasWinner('Draw')
          // console.log('Draw!')
          // setIsComputerMove(false)
          // setIsPlayerMove(false)
          setPlayerTurn('')
          setTitle('New Game?')
        }
        else if (game.isWinning(Constants._user)) {
          game.displayBoard()
          setHasWinner('Player Wins!')
          // console.log('Player wins!')
          // setIsComputerMove(true)
          // setIsPlayerMove(false)
          setPlayerTurn('')
          setTitle('New Game?')
        } else {
          // set player move false and comp true
          // setIsPlayerMove(false)
          // setIsComputerMove(true)
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
