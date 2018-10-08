import { Board } from "./board";
import { Cell } from "./cell";

interface IGame {
    time: number,
    cells: any,
    board: Board,
    bombs: number,
}

export class Game implements IGame {
    time;
    cells;
    board;
    bombs = 5;
    
    constructor(board) {
        this.board = board;
        this.cells = [];
        this.buildCellArray();
        this.attachBombs();
        console.log(this.getCells());
    }

    public buildCellArray(): void {
        for (var _c = 0; _c < this.board.column; _c++) {
            for (var _r = 0; _r < this.board.row; _r++) {
                var cell = new Cell(_r, _c);
                this.cells.push(cell);
            }
        }
    }

    public attachBombs(): void {
        var indexNumberOfBombs = this.buildIndexNumberForBombs();
        console.log(indexNumberOfBombs)
        for ( var i=0; i<this.getCells().length; i++ ) {
          var bomb = false;
          if(indexNumberOfBombs.indexOf(i) > -1) {
              bomb = true;
          }

          this.cells[i].setBomb(bomb); 
        }
    }

    public getCells(): any {
        return this.cells;
    }

    public onClickCell(cell: Cell): void {
        cell.onClick();

        if(cell.hasBomb()) {
            this.finishGame();
        }
    }

    public finishGame()
    {
        for(var i=0; i<this.getCells().length; i++) {
            this.cells[i].onClick();
        }
    }

    protected buildIndexNumberForBombs(): number[] {
        var arr = [];
        var cellLength = this.getCells().length;
        var bombs = cellLength / this.bombs;

        for(var _i = 1; _i <= this.bombs; _i++) {
            var value = Math.floor(Math.random() * (_i*bombs-(_i-1)*bombs)) + (_i-1)*bombs;
            arr.push(value);
        }

        return arr; 
    }
}