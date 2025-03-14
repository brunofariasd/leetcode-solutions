function evalRPN(tokens: string[]): number {
  if (tokens.length === 1) return parseInt(tokens[0]);

  let numbers: number[] = [];
  const checkIsOperator = ["+", "-", "/", "*"];

  for (let i = 0; i < tokens.length; i++) {}

  for (let i = 0; i < tokens.length; i++) {
    if (checkIsOperator.includes(tokens[i])) {
      let newValue = 0;
      const nLength = numbers.length;
      const lNumber = numbers[nLength - 2];
      const rNumber = numbers[nLength - 1];

      if (tokens[i] === "+") newValue = lNumber + rNumber;
      if (tokens[i] === "-") newValue = lNumber - rNumber;
      if (tokens[i] === "/") newValue = Math.trunc(lNumber / rNumber);
      if (tokens[i] === "*") newValue = lNumber * rNumber;

      numbers.pop();
      numbers.pop();
      numbers.push(newValue);
    } else {
      numbers.push(parseInt(tokens[i]));
    }
  }

  return numbers.pop()!;
}
