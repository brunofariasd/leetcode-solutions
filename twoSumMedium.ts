function twoSum(numbers: number[], target: number): number[] {
  if (numbers.length === 2) return [1, 2];

  const hashObj = {};
  const result: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    hashObj[numbers[i]] = i;
  }

  Object.keys(hashObj).every((key) => {
    const pairSum = hashObj[target - parseInt(key)];

    if (pairSum !== undefined) {
      target - parseInt(key) === parseInt(key)
        ? result.push(pairSum, hashObj[key] + 1)
        : result.push(hashObj[key] + 1, pairSum + 1);

      return false;
    }

    return true;
  });

  return result.sort((a, b) => a - b);
}
