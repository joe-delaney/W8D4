class Board {
  constructor() {
    this.board = [];

    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(' ');
      }
      this.board.push(row);
    }
  }

  won() {

  }

  winner() {

  }

  empty(pos) {
    let x = pos[0];
    let y = pos[1];
    if (this.board[x][y] === ' ') {
      return true;
    } else {
      return false;
    }
  }

  place_mark(pos, mark) {
    if (this.empty(pos)) {
      let x = pos[0];
      let y = pos[1];
      this.board[x][y] = mark;
      return true;
    } else {
      return false;
    }
  }

  print() {
    console.log(this.board[0].join(' | '));
    console.log('---------');
    console.log(this.board[1].join(' | '));
    console.log('---------');
    console.log(this.board[2].join(' | '));
  }
}
let board = new Board();
console.log(board.empty([0, 0]));