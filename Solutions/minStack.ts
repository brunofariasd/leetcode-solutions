/**
Input
  ["MinStack","push","push","push","getMin","pop","top","getMin"]
  [[],[-2],[0],[-3],[],[],[],[]]

Output
  [null,null,null,null,-3,null,0,-2]

Explanation
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin(); // return -3
  minStack.pop();
  minStack.top();    // return 0
  minStack.getMin(); // return -2
 */

class MinStack {
  private arrValues: number[];
  private minorNumbers: number[];

  constructor() {
    this.arrValues = [];
    this.minorNumbers = [Infinity];
  }

  push(val: number): void {
    this.arrValues.push(val);

    const minorNumber = this.minorNumbers[this.minorNumbers.length - 1];
    minorNumber > val
      ? this.minorNumbers.push(val)
      : this.minorNumbers.push(minorNumber);
  }

  pop(): void {
    this.arrValues.pop();
    this.minorNumbers.pop();
  }

  top(): number {
    return this.arrValues[this.arrValues.length - 1];
  }

  getMin(): number {
    return this.minorNumbers[this.minorNumbers.length - 1];
  }
}
