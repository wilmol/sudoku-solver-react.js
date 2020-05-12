export const solve = async (board, setBoard) => {
  await sleep();
  const boardCopy = [...board];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (boardCopy[row][col].value !== 0) {
        // can't change filled cells
        continue;
      }
      // try 1 to 9 for the empty cell
      for (let num = 1; num <= 9; num++) {
        if (isValidMove(boardCopy, row, col, num)) {
          // valid move, try it
          boardCopy[row][col].value = num;
          setBoard(boardCopy);
          if (await solve(board, setBoard)) {
            return true;
          } else {
            // didn't solve with this move, backtrack
            boardCopy[row][col].value = 0;
            setBoard(boardCopy);
          }
        }
      }
      // nothing worked for empty cell, must have deprived boards solution with a previous move
      return false;
    }
  }
  // all cells filled
  return true;
};

export const isValidMove = (board, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    // check row
    if (board[i][col].value === num) {
      return false;
    }
    // check col
    if (board[row][i].value === num) {
      return false;
    }
    // check 3x3 square
    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)]
        .value === num
    ) {
      return false;
    }
  }
  return true;
};

const sleep = () => new Promise((resolve) => setTimeout(resolve, 0));
