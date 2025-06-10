function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const nums = candidates.sort((a, b) => a - b);

  function DFS(sum: number, arr: number[], index: number) {
    if (sum === target) {
      res.push([...arr]);
      return;
    }

    if (sum > target || index >= nums.length) return;

    arr.push(nums[index]);
    DFS(sum + nums[index], arr, index);

    arr.pop();
    DFS(sum, arr, index + 1);
  }

  DFS(0, [], 0);

  return res;
}
