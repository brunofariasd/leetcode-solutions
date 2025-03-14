function search(nums: number[], target: number): number {
  let startI = 0;
  let endI = nums.length - 1;

  while (startI <= endI) {
    const halfI = startI + Math.floor((endI - startI) / 2);

    if (nums[halfI] === target) return halfI;

    if (nums[halfI] > target) {
      endI = halfI - 1;
    } else {
      startI = halfI + 1;
    }
  }

  return -1;
}
