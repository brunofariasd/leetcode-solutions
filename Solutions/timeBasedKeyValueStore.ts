/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
class TimeMap {
  private hashMap: Map<string, [{ value: string; timestamp: number }]>;
  constructor() {
    this.hashMap = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const elementExist = this.hashMap.get(key);

    elementExist
      ? elementExist.push({ value, timestamp })
      : this.hashMap.set(key, [{ value, timestamp }]);
  }

  get(key: string, timestamp: number): string {
    const elementExist = this.hashMap.get(key);
    let res = "";

    if (!elementExist) return "";

    let startI = 0;
    let endI = elementExist.length - 1;

    while (startI <= endI) {
      const halfI = startI + Math.floor((endI - startI) / 2);

      if (timestamp >= elementExist[halfI].timestamp) {
        res = elementExist[halfI].value;
        startI = halfI + 1;
      } else {
        endI = halfI - 1;
      }
    }

    return res;
  }
}
