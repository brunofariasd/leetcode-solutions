function permute(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [[]];
  }

  let permutations = permute(nums.slice(1))!;

  const res: number[][] = [];
  for (let p of permutations) {
    for (let i = 0; i <= p.length; i++) {
      let resCopyArr: number[] = p.slice();
      resCopyArr.splice(i, 0, nums[0]);
      res.push(resCopyArr);
    }
  }

  return res;
}
