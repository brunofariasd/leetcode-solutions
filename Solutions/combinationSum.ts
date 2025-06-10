function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const nums = candidates.sort((a, b) => a - b);

  function DFS(sum: number, arr: number[], index: number) {
    if (sum === target) {
      res.push([...arr]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      if (sum + nums[i] > target) {
        return;
      }
      arr.push(nums[i]);

      DFS(sum + nums[i], arr, i);

      arr.pop();
    }
  }

  DFS(0, [], 0);

  return res;
}
