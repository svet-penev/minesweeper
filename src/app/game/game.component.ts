import { Component, OnInit } from '@angular/core';
import { Board } from './../core/board'
import { Cell } from './../core/cell'
import { Game } from './../core/game'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  board = <Board>{};
  cell  = <Cell>{};
  game  = <Game>{};
  draw: any;
  
  constructor() {

  }

  ngOnInit() {
    this.board = new Board(3, 5);
    this.draw = this.board.draw();
    this.game = new Game(this.board);
    
  }

  clickCell(row, column) {
    this.cell = new Cell(row, column);
    console.log(this.cell.getSurroundingCell());
  }
  
  
}
