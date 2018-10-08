export interface ICell {
    type: string,
    visible: boolean,
    haveBomb: boolean,
    row:number;
    column:number;

}

export class Cell implements ICell {
    type;
    isClicked;
    row;
    column;
    haveBomb;
    visible;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
        this.isClicked = false;
        this.haveBomb = false;
    }
    
    ngOnInit(): void {
        
    }


    public getSurroundingCell(): any { 
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

    public getKey(): string{
        return this.column+'_'+this.row;
    }

    public canClick(): boolean { 
        return !this.isClicked; 
    }

    public onClick(): void {
        this.isClicked = true;
    }

    isFlagged(): boolean { return true; }

    hasBomb(): boolean { 
        return this.haveBomb; 
    }

    setBomb(bool: boolean): void {
        this.haveBomb = bool;
    }

}