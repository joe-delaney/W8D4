const Board = require('./board.js');

class Game {
  constructor(reader) {
    this.reader = reader;
    this.board = new Board();
    this.current_mark = 'X';
  }

  switch_player() {
    if(this.current_mark === 'X') {
      this.current_mark = 'O';
    } else {
      this.current_mark = 'X';
    }
  }

  playTurn(reader, callback) {
    this.board.print();
    reader.question(`Select position to place your mark`, handleResponse.bind(this));

    function handleResponse(answer) {
      let pos = JSON.parse(answer);
      if (!this.board.validMove(pos)) {
        console.log("Invalid Move!");
        this.playTurn(reader, callback);
        return;
      }

      this.board.place_mark(pos, this.current_mark);
      this.switch_player();
      callback();
    }
  }

  run(reader, completionCallback) {
    //while game is not over
    //start with current player
    //prompt current player for input
    //After successful input, place the mark on the board
    //switch to the next player

      if(this.board.winner()) {
        this.board.print();
        this.switch_player();
        console.log(`${this.current_mark} Wins!`);
        completionCallback();
      }
      else {
        this.playTurn(reader, this.run.bind(this, reader, completionCallback));
      }
    }
}

module.exports = Game;