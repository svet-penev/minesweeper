export interface IBoard {
    row: number,
    column: number
    draw(): void;
}

export class Board implements IBoard {
    row;
    column;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    draw(): object {
        return {
           "row": new Array(this.row),
           "column": new Array(this.column),
        }
    };
}