import React from 'react'
import { Constants } from '../models/Constants'
import Cell from '../models/Cell'

export default function CellComponent({
  board, setBoard, cellState, game,
  rowIdx, colIdx, isPlayerMove,
  setIsPlayerMove, setIsComputerMove, setHasWinner
}) {

  const handleClick = () => {
    if (isPlayerMove) {
      try {
        const newCell = new Cell(rowIdx, colIdx, Constants._user)
        const updatedGameBoard = board
        updatedGameBoard[rowIdx][colIdx] = newCell
        setBoard([...updatedGameBoard])
        game.move(newCell, Constants._user)
        if (game.isWinning(Constants._user)) {
          game.displayBoard()
          setHasWinner('Player')
          console.log('Player wins!')
          setIsComputerMove(true)
          setIsPlayerMove(false)
        } else {
          // set player move false and comp true
          setIsPlayerMove(false)
          setIsComputerMove(true)
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
