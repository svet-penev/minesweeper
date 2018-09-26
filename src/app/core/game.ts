import { Board } from "./board";
import { Cell } from "./cell";

interface IGame {
    time: number,
    cells: [],
    board: Board,
    isFinished() :boolean;
}

export class Game implements IGame {
    time;
    cells;
    board;
    
    constructor(board) {
        this.board = board;
        this.cells = [];
        this.buildCellArray();
    }
    isFinished() {return true;}

    public buildCellArray(): void {
        for (var _c = 0; _c < this.board.column; _c++) {
            for (var _r = 0; _r < this.board.row; _r++) {
                var cell = new Cell(_r, _c);
                this.cells.push(cell);
            }
        }
    }
}