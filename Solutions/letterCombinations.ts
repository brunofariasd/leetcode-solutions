function letterCombinations(digits: string): string[] {
  const res: string[] = [];
  const numberLetters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "qprs",
    "8": "tuv",
    "9": "wxyz",
  };

  if (digits.length === 0) return res;

  function DFS(currStr: string, index: number) {
    if (index >= digits.length) {
      res.push(currStr);
      return;
    }

    const str: string = numberLetters[digits[index]];

    for (let i = 0; i < str.length; i++) {
      DFS(currStr + str[i], index + 1);
    }
  }

  DFS("", 0);

  return res;
}
