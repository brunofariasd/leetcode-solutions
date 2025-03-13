function findMin(nums: number[]): number {
  let startI = 0;
  let endI = nums.length - 1;
  let res = Infinity;

  while (startI <= endI) {
    let halfI = startI + Math.floor((endI - startI) / 2);

    if (nums[halfI] > nums[endI]) {
      startI = halfI + 1;
    } else {
      res = Math.min(res, nums[halfI]);
      endI = halfI - 1;
    }
  }

  return res;
}
