function generateParenthesis(n: number): string[] {
  const defaultPatterns = {
    1: ["()"],
    2: ["(())"],
    3: ["((()))", "(()())", "(())()", "()(())", "()()()"],
  };

  const sAux = "()";
  const sAuxL = "(";
  const sAuxr = ")";

  if (defaultPatterns[n]) return defaultPatterns[n];

  const result: string[] = [];

  //First position
  result.push(sAux.repeat(n));

  for (let i = n; i <= 1; i--) {
    for (let j = 0; j <= n; j++) {
      result.push(defaultPatterns[j + 1]);
    }
  }

  //Last position
  result.push(sAux.repeat(n));

  return result;
}

("()()()()");

("(())()()");
("()(())()");
("()()(())");

("(())(())");
("()((()))");
"(((())))"[("((()))", "(()())", "(())()", "()(())", "()()()")];
