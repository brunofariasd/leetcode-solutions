//TODO Not complete yet, need to be finished

function threeSum(nums: number[]): number[][] {
  if (nums.length === 3) {
    return nums.reduce((prev, current) => prev + current) === 0 ? [nums] : [];
  }

  const hashObj = {};
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    hashObj[nums[i]] = nums[i];
  }

  if (Object.keys(hashObj).length === 1 && hashObj[0] * 3 === 0)
    return [Array(3).fill(nums[0])];

  Object.keys(hashObj).reduce((prev, current) => {
    const sumTwoFirst = parseInt(prev) + parseInt(current);
    const thirdTerm = hashObj[sumTwoFirst >= 0 ? -sumTwoFirst : sumTwoFirst];

    if (thirdTerm !== undefined) {
      result.push([prev, current, thirdTerm].map((num) => parseInt(num)));
    }

    return current;
  });

  return result;
}
