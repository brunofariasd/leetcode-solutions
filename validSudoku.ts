function isValidSudoku(board: string[][]): boolean {
  const sortedBoard = {};
  const sortedBoardColum = {};
  const checkIsNumber = ".";

  for (let iRow = 0; iRow < 9; iRow++) {
    for (let iCol = 0; iCol < 9; iCol++) {
      if (!sortedBoard[iRow]) sortedBoard[iRow] = [];
      if (!sortedBoardColum[iRow]) sortedBoardColum[iRow] = [];

      if (board[iRow][iCol] !== checkIsNumber) {
        sortedBoard[iRow].push(parseInt(board[iRow][iCol]));
      }

      if (board[iCol][iRow] !== checkIsNumber) {
        sortedBoardColum[iRow].push(parseInt(board[iCol][iRow]));
      }
    }
  }

  Object.keys(sortedBoard).some((key) => {
    sortedBoard[key].sort((a, b) => a - b);
    sortedBoardColum[key].sort((a, b) => a - b);
  });

  //TODO
  for (let iteractor = 0; iteractor < 9; iteractor++) {
    const isRowValid = sortedBoard[iteractor].every((keyRow) => {
      return (
        sortedBoard[iteractor][keyRow] !== sortedBoard[iteractor][keyRow - 1]
      );
    });

    const isColumnValid = sortedBoardColum[iteractor].every((keyCol) => {
      return (
        sortedBoardColum[iteractor][keyCol] !==
        sortedBoardColum[iteractor][keyCol - 1]
      );
    });

    if (!(isRowValid && isColumnValid)) return false;
  }

  return true;
}
