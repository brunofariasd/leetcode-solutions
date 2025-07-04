/**
 *
 * @param nums
 * @param k
 *
 * const { MinPriorityQueue } = require("@datastructures-js/priority-queue")
 */

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinPriorityQueue();

  for (const num of nums) {
    minHeap.push(num);
  }

  const numsArr = minHeap.toArray();

  return numsArr[numsArr.length - k] as number;
}

// Different Approach
function findKthLargestBetter(nums: number[], k: number): number {
  const minHeap = new MinPriorityQueue();

  for (const num of nums) {
    minHeap.push(num);
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  return minHeap.front() as number;
}
