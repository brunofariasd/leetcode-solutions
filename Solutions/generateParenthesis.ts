//TODO Utilizar backtrack to this problem

function backtrack(
  openN: number,
  closedN: number,
  n: number,
  res: string[],
  stack: string
): string[] | void {
  if (openN === closedN && openN === n) {
    res.push(stack);
    return;
  }

  if (openN < n) {
    this.backtrack(openN + 1, closedN, n, res, stack + "(");
  }
  if (closedN < openN) {
    this.backtrack(openN, closedN + 1, n, res, stack + ")");
  }
}

function generateParenthesis(n: number): string[] {
  const res = [];
  this.backtrack(0, 0, n, res, "");
  return res;
}
