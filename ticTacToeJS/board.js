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

  won(mark) {
    //check rows and columns 
    for(let i = 0; i < this.board.length; i++) {
      let col = [];
      let row = [];
      for(let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === mark) {
          row.push(mark);
        }
        if (this.board[j][i] === mark) {
          col.push(mark);
        }
      }
      if (col.length === 3 || row.length === 3) {
        return true;
      }
    }

    //check diagonals
    let forwardDiag = [];
    let backwardDiag = [];

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][i] === mark) {
        forwardDiag.push(mark);
      }
      if (this.board[i][this.board.length - 1 - i] === mark) {
        backwardDiag.push(mark);
      }
    }

    if (forwardDiag.length === 3 || backwardDiag.length === 3) {
      return true;
    } else {
      return false;
    }
  }

  winner() {
    return this.won('X') || this.won('O');
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
// console.log(board.empty([0, 0]));

//Row Winner
// board.place_mark([0,0], 'X');
// board.place_mark([0,1], 'X');
// board.place_mark([0,2], 'X');

// //Column Winner
// board.place_mark([0,0], 'X');
// board.place_mark([1,0], 'X');
// board.place_mark([2,0], 'X');

// //Forward Diagonal Winner
// board.place_mark([0,0], 'X');
// board.place_mark([1,1], 'X');
// board.place_mark([2,2], 'X');

// //Backward Diagonal Winner
// board.place_mark([0,2], 'X');
// board.place_mark([1,1], 'X');
// board.place_mark([2,0], 'X');

console.log(board.won('X'));
console.log(board);