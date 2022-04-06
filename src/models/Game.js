import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import Cell from './Cell'
import { Constants } from './Constants'

export default class Game {
  constructor() {
    this.board = [[], [], []]
    this.testBoard = [[], [], []]
    this.emptyCells = []
    this.rootValues = []
    this.initializeBoard()
  }
  initializeBoard() {
    this.board = [[], [], []]
    for (let i = 0; i < Constants._boardSize; i++) {
      for (let j = 0; j < Constants._boardSize; j++) {
        const newCell = new Cell(i, j, Constants._empty)
        this.board[i].push(newCell)
      }
    }
  }
  isRunning() {
    // const emptyCells = this.getEmptyCells()
    if (this.isWinning(Constants._computer)) return false
    if (this.isWinning(Constants._user)) return false
    if (this.getEmptyCells().length < 1) {
      console.log('no more empty cells')
      return false
    }
    return true
  }
  isWinning(player) {
    if (
      this.board[0][0]['cellState'] === player &&
      this.board[1][1]['cellState'] === player &&
      this.board[2][2]['cellState'] === player
    )
      return true
    if (
      this.board[0][2]['cellState'] === player &&
      this.board[1][1]['cellState'] === player &&
      this.board[2][0]['cellState'] === player
    )
      return true
    for (let i = 0; i < Constants._boardSize; i++) {
      if (
        this.board[i][0]['cellState'] === player &&
        this.board[i][1]['cellState'] === player &&
        this.board[i][2]['cellState'] === player
      )
        return true
      if (
        this.board[0][i]['cellState'] === player &&
        this.board[1][i]['cellState'] === player &&
        this.board[2][i]['cellState'] === player
      )
        return true
    }
    return false
  }
  getEmptyCells() {
    this.emptyCells = []
    for (let i = 0; i < Constants._boardSize; i++) {
      for (let j = 0; j < Constants._boardSize; j++) {
        if (this.board[i][j]['cellState'] === Constants._empty) {
          this.emptyCells.push(new Cell(i, j, Constants._empty))
        }
      }
    }
    return this.emptyCells
  }
  move(cell, player) {
    this.board[cell.x][cell.y] = cell
    return this.board
  }
  displayBoard() {
    let board = '||---------||\n'
    for (let i = 0; i < Constants._boardSize; i++) {
      let row = '||'
      for (let j = 0; j < Constants._boardSize; j++) {
        row += this.board[i][j]
      }
      board += row + '||\n'
    }
    board +='||---------||'
    console.log(board)
  }
  randomMove() {
    let x, y
    x = Math.floor(Math.random() * 3)
    y = Math.floor(Math.random() * 3)
    if (!this.isRunning()) {
      console.log('No moves left')
      throw new Error('No Moves Left')
    }
    while (this.board[x][y]['cellState'] !== Constants._empty && this.isRunning()) {
      x = Math.floor(Math.random() * 3)
      y = Math.floor(Math.random() * 3)
    }
    return [x, y]
  }
  callMiniMax(depth, player) {
    this.rootValues = []
    this.miniMax(0, Constants._computer)
    return this.rootValues
  }
  miniMax(depth, player) {
    if (this.isWinning(Constants._computer)) return +1
    if (this.isWinning(Constants._user)) return -1
    const availableCells = this.getEmptyCells();
    if (availableCells.length < 1) return 0
    const scores = [];
    for (let i = 0; i < availableCells.length; i ++) {
      const currentCell = availableCells[i];
      if (player === Constants._computer) {
        currentCell.cellState = Constants._computer
        this.board[currentCell.x][currentCell.y] = currentCell
        const currentScore = this.miniMax(depth+1, Constants._user)
        scores.push(currentScore);
        if (depth === 0) {
          currentCell.miniMax = currentScore
          this.rootValues.push(currentCell)
        }
      } else if (player === Constants._user) {
        currentCell.cellState = Constants._user
        this.board[currentCell.x][currentCell.y] = currentCell
        const currentScore = this.miniMax(depth+1, Constants._computer)
        scores.push(currentScore)
      }
      currentCell.cellState = Constants._empty
      this.board[currentCell.x][currentCell.y] = currentCell
    }
    if (player === Constants._computer) {
      return Math.max(...scores)
    }
    return Math.min(...scores)
  }
}