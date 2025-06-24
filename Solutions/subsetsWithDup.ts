function subsetsWithDup(nums: number[]): number[][] {
  let res: number[][] = [];
  nums.sort((a, b) => a - b);

  function DFS(numbers: number[], auxArr: number[], index: number) {
    if (index >= nums.length) {
      res.push([...auxArr]);
      return;
    }

    auxArr.push(numbers[index]);
    DFS(numbers, auxArr, index + 1);

    while (numbers[index] === numbers[index + 1]) {
      index++;
    }

    auxArr.pop();
    DFS(numbers, auxArr, index + 1);
  }

  DFS(nums, [], 0);

  return res;
}
