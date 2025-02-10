//TODO Change implementation to O(n) currently is something link O (n log n)

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let currentSeq = 1;
  let biggestSeq = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === nums[i - 1]) {
      currentSeq = currentSeq + 1;
    } else {
      if (nums[i] - 1 > nums[i - 1]) {
        biggestSeq = Math.max(currentSeq, biggestSeq);
        currentSeq = 1;
      }
    }
  }

  return Math.max(currentSeq, biggestSeq);
}
