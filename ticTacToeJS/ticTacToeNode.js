const Board = require("./board");

class TicTacToeNode {
  constructor(board, nextMoverMark, prevMovePosition) {
    this.board = board;
    this.nextMoverMark = nextMoverMark;
    this.prevMovePosition = prevMovePosition;
  }

  children() {
    let children = [];
    for(let i = 0; i < this.board.length; i++) {
      for(let j = 0; j < this.board.length; j++) {
        if (this.board.empty([i, j])) {
          let temp = this.copyBoard(i, j);
          let newNode = new TicTacToeNode(temp, this.oppositeMark(), [i,j]);
          children.push(newNode);
        }
      }
    }
    return children;
  }

  oppositeMark() {
    if(this.nextMoverMark == 'X') {
      return 'O';
    } else {
      return 'X';
    }
  }

  copyBoard(x, y) {
    let tempBoard = new Board();
    for(let i = 0; i < this.board.length; i++) {
      for(let j = 0; j < this.board.length; j++) {
        tempBoard.board[i][j] = this.board.board[i][j];
      }
    }
    tempBoard.place_mark([x,y], this.nextMoverMark);
    return tempBoard;
  }

  losingNode(evaluator) {
    if (this.board.winner() && this.board.winnerMark() !== evaluator && !this.board.tied()) {
      return true;
    } else if (this.board.winner()) {
      return false;
    }

    if (evaluator === this.nextMoverMark) {
      this.children().every((child) => child.losingNode(evaluator));
    } else {
      this.children().some((child) => child.losingNode(evaluator));
    }
  }

  winningNode(evaluator) {
    if (this.board.winner() && this.board.winnerMark() === evaluator) {
      return true;
    } else if (this.board.winner()) {
      return false;
    }

    if (evaluator !== this.nextMoverMark) {
      this.children().every((child) => child.winningNode(evaluator));
    } else {
      this.children().some((child) => child.winningNode(evaluator));
    }
  }
}