export default class Cell {
    constructor(x, y, cellState) {
        this.x = x;
        this.y = y;
        this.miniMax = 0
        this.cellState = cellState
    }

    toString() {
        return `(${this.cellState})`
    }
}