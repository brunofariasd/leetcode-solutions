/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class KthLargest {
  // minHeap: number[] = [];
  // constructor(k: number, nums: number[]) {
  //   while (nums) {
  //     let num = nums.pop();

  //     let index = 0;
  //     while (index <= k && num) {
  //       this.minHeap[index] < num;
  //       const temp = this.minHeap[index];
  //       this.minHeap[index] = num;
  //       num = temp;

  //       index--;
  //     }
  //   }
  // }

  numbers: number[];
  kth: number;
  constructor(k: number, nums: number[]) {
    this.numbers = nums;
    this.kth = k;
  }

  add(val: number): number {
    this.numbers.push(val);
    this.numbers.sort((a, b) => a - b);
    return this.numbers[this.numbers.length - this.kth];
  }
}
