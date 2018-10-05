import { Component, OnInit } from '@angular/core';
import { Board } from '../core/board'
import { Game } from '../core/game'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  board = <Board>{};
  game  = <Game>{};
  draw: any;
  
  constructor() {

  }

  ngOnInit() {
    this.initBoard();
    this.initGame();
  }

  protected initBoard(): void {
    this.board = new Board(3, 5);
  }

  protected initGame():void {
    this.game = new Game(this.board);
    this.game.time = 30;
  }
  
}
