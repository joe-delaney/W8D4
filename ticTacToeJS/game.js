const Board = require('./board.js');
const HumanPlayer = require('./humanPlayer.js');

class Game {
  constructor(reader) {
    this.reader = reader;
    this.board = new Board();
    this.player1 = new HumanPlayer('X', this);
    this.player2 = new HumanPlayer('O', this);
    this.currentPlayer = this.player1;
  }

  switchPlayer() {
    if(this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  run(reader, completionCallback) {
      if(this.board.winner()) {
        this.board.print();
        this.switchPlayer();
        console.log(`${this.currentPlayer.mark} Wins!`);
        completionCallback();
      }
      else {
        this.currentPlayer.playTurn(reader, this.run.bind(this, reader, completionCallback));
      }
    }
}

module.exports = Game;