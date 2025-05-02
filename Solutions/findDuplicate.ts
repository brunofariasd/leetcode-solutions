/**
 *
 * @param nums
 * @returns
 *
 * Funny question. OBS.: Not best version.
 *
 * O(n)
 * O(n)
 *
 */

function findDuplicate(nums: number[]): number {
  const auxArr = new Array(nums.length + 1).fill(0);

  for (let i = 0; i <= nums.length; i++) {
    auxArr[nums[i]] += 1;

    if (auxArr[nums[i]] === 2) return nums[i];
  }

  return -1;
}
