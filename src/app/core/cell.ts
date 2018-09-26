interface ICell {
    type: string,
    visible: boolean,
    haveBomb: boolean,
    row:number;
    column:number;

}

export class Cell implements ICell {
    type;
    visible;
    row;
    column;
    haveBomb;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }
    
    ngOnInit(): void {
    
    }

    getSurroundingCell(): any { 
        var surroundingCell: any = [
            [this.row-1, this.column-1],
            [this.row, this.column-1],
            [this.row+1, this.column-1],
            [this.row-1, this.column],
            [this.row+1, this.column],
            [this.row-1, this.column+1],
            [this.row, this.column+1],
            [this.row+1, this.column+1],
        ];

        return surroundingCell;
     }

    isVisible(): boolean { return true; }

    isFlagged(): boolean { return true; }

    hasBomb(): boolean { return true; }

}