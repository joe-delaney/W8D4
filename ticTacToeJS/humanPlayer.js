class HumanPlayer {
  constructor(mark, game) {
    this.mark = mark;
    this.playTurn = this.playTurn.bind(game);
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

      this.board.place_mark(pos, this.currentPlayer.mark);
      this.switchPlayer();
      callback();
    }
  }
}

module.exports = HumanPlayer;