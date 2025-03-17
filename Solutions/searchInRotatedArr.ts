//REVIEW IT AGAIN

function search(nums: number[], target: number): number {
  let startI = 0;
  let endI = nums.length - 1;

  while (startI <= endI) {
    let halfI = Math.floor((endI + startI) / 2);

    if (target === nums[halfI]) return halfI;

    if (nums[startI] <= nums[halfI]) {
      if (target > nums[halfI] || target < nums[startI]) {
        startI = halfI + 1;
      } else {
        endI = halfI - 1;
      }
    } else {
      if (target < nums[halfI] || target > nums[endI]) {
        endI = halfI - 1;
      } else {
        startI = halfI + 1;
      }
    }
  }

  return -1;
}
