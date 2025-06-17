/**
 *
 * Review it again.
 *
 *
 * @param candidates
 * @param target
 * @returns
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const nums = candidates.sort((a, b) => a - b);

  function DFS(
    sum: number,
    index: number,
    auxArr: number[],
    numbers: number[]
  ) {
    if (sum === target) {
      res.push([...auxArr]);
      return;
    }

    if (sum > target || index === numbers.length) return;

    auxArr.push(numbers[index]);
    DFS(sum + numbers[index], index + 1, auxArr, numbers);

    while (
      index + 1 < numbers.length &&
      numbers[index] === numbers[index + 1]
    ) {
      index++;
    }

    auxArr.pop();
    DFS(sum, index + 1, auxArr, numbers);
  }

  DFS(0, 0, [], nums);

  return res;
}
