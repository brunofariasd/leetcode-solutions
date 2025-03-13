function search(nums: number[], target: number): number {
  let startI = 0;
  let endI = nums.length - 1;

  while (startI <= endI) {
    let halfI = startI + Math.floor((endI - startI) / 2);

    if (target === nums[halfI]) return halfI;

    if (target <= nums[endI] && nums[halfI] > nums[endI]) {
      startI = halfI + 1;
    } else {
      endI = halfI - 1;
    }
  }

  return nums[startI] === target ? startI : -1;
}

(0)[(4, 5, 6, 7, 0, 1, 2)];
