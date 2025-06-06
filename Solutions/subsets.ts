function subsets(nums: number[]): number[][] {
  const res = [];
  const subset = [];

  function backTrack(
    nums: number[],
    index: number,
    res: number[][],
    subset: number[]
  ): void {
    if (index >= nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    backTrack(nums, index + 1, res, subset);
    subset.pop();
    backTrack(nums, index + 1, res, subset);
  }

  backTrack(nums, 0, res, subset);

  return res;
}
