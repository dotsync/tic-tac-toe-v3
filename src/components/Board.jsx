import React, { useState, useEffect } from 'react'
import './Board.css'
import CellComponent from './CellComponent'
import { Constants } from '../models/Constants'
import Cell from '../models/Cell'

export default function Board({ board, setBoard, game }) {
  const [hasWinner, setHasWinner] = useState('')
  const [isPlayerMove, setIsPlayerMove] = useState(true)
  const [isComputerMove, setIsComputerMove] = useState(false)

  useEffect(() => {
    if (isComputerMove) {
      // try find valid move
      const [x, y] = game.randomMove()
      try {
        setTimeout(() => {
          // const newCell = new Cell(x, y, Constants._computer)
          // const updatedGameBoard = board
          // updatedGameBoard[x][y] = newCell
          // setBoard([...updatedGameBoard])
          // game.move(newCell, Constants._computer)
          
          const moveOptions = game.callMiniMax(0, Constants._computer)
          console.log('moveOptions', moveOptions)
          // iterate options to find cell with greatest minimax val
          let bestMoveMiniMaxVal = -1
          let bestMoveCell
          moveOptions.forEach((option) => {
            // console.log('option minimax value:', option.miniMax)
            if (option.miniMax > bestMoveMiniMaxVal) {
              bestMoveMiniMaxVal = option.miniMax
              bestMoveCell = option
            }
          })
          if (bestMoveMiniMaxVal === -1) {
            const [x, y] = game.randomMove()
            console.log('no good move, pick random move', x, y)

          } else {
            const [x, y] = [bestMoveCell.x, bestMoveCell.y]
            console.log('bestmove', x, y, 'score', bestMoveMiniMaxVal)
          }


          const newCell = new Cell(x, y, Constants._computer)
          const updatedGameBoard = board
          updatedGameBoard[x][y] = newCell
          console.log('newCell', newCell)
          setBoard([...updatedGameBoard])
          game.move(newCell, Constants._computer)

          game.displayBoard()

          // check for win
          if (game.isWinning(Constants._computer)) {
            setHasWinner('Computer')
            console.log('Computer wins!')
            setIsComputerMove(false)
            setIsPlayerMove(false)
          } else {
            // swap turns
            setIsComputerMove(false)
            setIsPlayerMove(true)
          }
        }, Math.floor(Math.random() * 750 + 500))
      } catch (e) {
        console.log(e)
      }
    }
  }, [isPlayerMove])


  return (
    <div className="gameboard">
      {board.map((row, rowIdx) => {
        return (
          <div className="row">
            {row.map((cell, colIdx) => {
              const divLocator = 'loc' + rowIdx + colIdx
              return (
                <CellComponent
                  className={divLocator}
                  rowIdx={rowIdx}
                  colIdx={colIdx}
                  cellState={cell.cellState}
                  board={board}
                  game={game}
                  setBoard={setBoard}
                  setIsComputerMove={setIsComputerMove}
                  setIsPlayerMove={setIsPlayerMove}
                  isPlayerMove={isPlayerMove}
                  isComputerMove={isComputerMove}
                  hasWinner={hasWinner}
                  setHasWinner={setHasWinner}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
