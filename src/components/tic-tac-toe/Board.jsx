import React, { useState, useEffect } from 'react'
import './TicTacToe.css'
import CellComponent from './CellComponent'
import { Constants } from '../../models/Constants'
import Cell from '../../models/Cell'

export default function Board({ board, setBoard, game, playerTurn, setPlayerTurn }) {
  const [hasWinner, setHasWinner] = useState('')
  // const [isPlayerMove, setIsPlayerMove] = useState(false)
  // const [isComputerMove, setIsComputerMove] = useState(true)
  const [title, setTitle] = useState('')
  // const [playerTurn, setPlayerTurn] = useState('')

  useEffect(() => {
    if (playerTurn === Constants._computer) {
      setTitle('Waiting for computer to move')
      try {
        setTimeout(() => {
          const moveOptions = game.callMiniMax(0, Constants._computer)
          let bestMoveMiniMaxVal = -2
          let bestMoveCell
          // for random first move
          let x, y
          if (moveOptions.length === 9) {
            console.log('New game started! Computer making random move...')
            ;[x, y] = game.randomMove()
          } else {
            // iterate options to find cell with greatest minimax val
            moveOptions.forEach((option) => {
              if (option.miniMax > bestMoveMiniMaxVal) {
                bestMoveMiniMaxVal = option.miniMax
                bestMoveCell = option
              }
            })
            if (bestMoveMiniMaxVal === -1) {
              ;[x, y] = game.randomMove()
            } else {
              ;[x, y] = [bestMoveCell.x, bestMoveCell.y]
            }
          }

          const newCell = new Cell(x, y, Constants._computer)
          const updatedGameBoard = board
          updatedGameBoard[x][y] = newCell
          setBoard([...updatedGameBoard])
          game.move(newCell, Constants._computer)

          game.displayBoard()

          // check for win
          if (game.getEmptyCells().length < 1  && !game.isWinning(Constants._computer) && !game.isWinning(Constants._user)) {
            game.displayBoard()
            setHasWinner('Draw!')
            // setIsComputerMove(true)
            // setIsPlayerMove(false)
            setPlayerTurn('')
            setTitle('New Game?')
          } else if (game.isWinning(Constants._computer)) {
            setHasWinner('Computer Wins!')
            setPlayerTurn('')
            setTitle('Waiting for user to move')
          } else {
            // swap turns
            // setIsComputerMove(false)
            // setIsPlayerMove(true)
            setPlayerTurn(Constants._user)
            setTitle('Waiting for user to move')
          }
        }, Math.floor(Math.random() * 750 + 500))
      } catch (e) {
        console.log(e)
      }
    }
  }, [board])

  const startNewGame = () => {
    setHasWinner('')
    game.initializeBoard()
    const mockboardWithCells = game.board;
    setBoard([...mockboardWithCells])
    // if (playerTurn === Constants._computer) {
    //   setIsComputerMove(true)
    //   setIsPlayerMove(false)
    // } else if (playerTurn === Constants._user) {
    //   setIsComputerMove(false)
    //   setIsPlayerMove(true)
    // }
    setPlayerTurn(Constants._computer)

  }

  return (
    <div className="gameboard">
      {hasWinner ? (
        <>
          <h1>{hasWinner}</h1>
        </>
      ) : (
        <h1>{playerTurn}</h1>
      )}
      {board.map((row, rowIdx) => {
        return (
          <div className="row" key={'row' + rowIdx}>
            {row.map((cell, colIdx) => {
              const divLocator = 'loc' + rowIdx + colIdx
              return (
                <CellComponent
                  key={'col' + colIdx}
                  className={divLocator}
                  rowIdx={rowIdx}
                  colIdx={colIdx}
                  cellState={cell.cellState}
                  board={board}
                  game={game}
                  setBoard={setBoard}
                  playerTurn={playerTurn}
                  // setIsComputerMove={setIsComputerMove}
                  // setIsPlayerMove={setIsPlayerMove}
                  // isPlayerMove={isPlayerMove}
                  // isComputerMove={isComputerMove}
                  setTitle={setTitle}
                  hasWinner={hasWinner}
                  setHasWinner={setHasWinner}
                  setPlayerTurn={setPlayerTurn}
                />
              )
            })}
          </div>
        )
      })}
      <button onClick={startNewGame}>restart</button>
    </div>
  )
}