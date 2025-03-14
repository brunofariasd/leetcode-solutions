function dailyTemperatures(temps: number[]): number[] {
  if (temps.length === 1) return [0];

  const res = new Array(temps.length).fill(0);
  const stack: number[][] = [];

  for (let i = 0; i < temps.length; i++) {
    while (stack.length > 0 && temps[i] > stack[stack.length - 1][0]) {
      const [_, index] = stack.pop()!;

      res[index] = i - index;
    }

    stack.push([temps[i], i]);
  }

  return res;
}
