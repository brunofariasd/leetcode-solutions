function dailyTemperatures(temps: number[]): number[] {
  if (temps.length === 1) return [0];

  const hashObj = {};

  for (let i = 0; i < temps.length; i++) {
    hashObj[temps[i]] ? hashObj[temps[i]].push(i) : (hashObj[temps[i]] = [i]);
  }

  Object.keys(hashObj)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .reduce((prev, current) => {
      hashObj[current];

      return current;
    });

  return [];
}
