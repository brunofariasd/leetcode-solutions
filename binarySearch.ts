function search(nums: number[], target: number): number {
  let startI = 0;
  let endI = nums.length;

  while (nums.length > 1) {
    const halfI = Math.floor((nums.length - 1) / 2);

    if (nums[halfI] === target) return -1;

    if (nums[halfI] > target) {
      nums = nums.splice(startI, halfI - 1);
    } else {
      nums = nums.splice(halfI + 1, nums.length - 1);
      startI = halfI + 1;
    }
  }

  return -1;
}
