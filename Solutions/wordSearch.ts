/**
 *
 * A little bit hard but the problem is about the conditions and the path.
 *
 * @param board
 * @param word
 * @returns
 */

function exist(board: string[][], word: string): boolean {
  let possibilities: number[][] = [];

  const nLinesBoard = board.length;
  const nColBoard = board[0].length;

  function DFS(row: number, col: number, length: number): boolean {
    if (length === word.length) return true;

    if (
      row < 0 ||
      col < 0 ||
      row >= nLinesBoard ||
      col >= nColBoard ||
      board[row][col] !== word[length] ||
      board[row][col] === "#"
    )
      return false;

    board[row][col] = "#";
    const res =
      DFS(row + 1, col, length + 1) ||
      DFS(row - 1, col, length + 1) ||
      DFS(row, col + 1, length + 1) ||
      DFS(row, col - 1, length + 1);

    board[row][col] = word[length];
    return res;
  }

  for (let i = 0; i < nLinesBoard; i++) {
    for (let j = 0; j < nColBoard; j++) {
      if (board[i][j] === word[0]) possibilities.push([i, j]);
    }
  }

  for (let i = 0; i < possibilities.length; i++) {
    const row = possibilities[i][0];
    const col = possibilities[i][1];

    if (DFS(row, col, 0)) return true;
  }

  return false;
}
