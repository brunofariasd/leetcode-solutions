function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === 1) return nums;

  const hashObj = {};
  let result: string[] = [];

  for (let i = 0; i < nums.length; i++) {
    hashObj[nums[i]] = hashObj[nums[i]] ? hashObj[nums[i]] + 1 : 1;
  }

  const sortedFrequency = Object.values(hashObj)
    .map((value) => parseInt(value as string))
    .sort((a, b) => a - b)
    .slice(-k);

  Object.keys(hashObj).every((key) => {
    if (sortedFrequency.includes(hashObj[key])) {
      result.push(key);
    }

    return result.length < k;
  });
,
  return result.map((value) => parseInt(value));
}
