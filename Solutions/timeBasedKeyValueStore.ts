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

    if (!elementExist) return "";

    let startI = 0;
    let endI = elementExist.length - 1;

    while (startI <= endI) {
      const halfI = startI + Math.floor((endI - startI) / 2);

      if(timestamp === elementExist[halfI].timestamp || startI === endI) return timestamp >= elementExist[halfI].timestamp ? elementExist[halfI].value : "";

      if (timestamp >= elementExist[halfI].timestamp) {
        startI = halfI + 1;
      } else {
        endI = halfI - 1;
      }
    }

    return timestamp >= elementExist[startI].timestamp ? elementExist[startI].value : "";
  }
}

>>>> 1 <<<<<

[10, 20]

[[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]