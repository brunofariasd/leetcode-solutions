function twoSum(nums: number[], target: number): number[] {
  if (nums.length === 2) return [0, 1];

  const candidates = {};
  let result: number[] = [];

  for (let i = 0; i <= nums.length; i++) {
    if (candidates[target - nums[i]] !== undefined) {
      return [candidates[target - nums[i]], i];
    }

    candidates[nums[i]] = i;
  }

  return result;
}
