/**
 *
 * @param stones
 * @returns
 */

// Simple and directly way but not too much effective
function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);

    const newStoneVal = stones.pop()! - stones.pop()!;
    stones.push(newStoneVal);
  }

  return stones[0];
}

/**
 *
 * const { MaxPriorityQueue } = require("@datastructures-js/priority-queue")
 *
 * Better and more effective way ??????
 */

function lastStoneWeightHeap(stones: number[]): number {
  const maxHeap = new MaxPriorityQueue();

  for (const stone of stones) {
    maxHeap.enqueue(stone);
  }

  while (maxHeap.size() > 1) {
    maxHeap.enqueue(maxHeap.dequeue() - maxHeap.dequeue());
  }

  return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
}
