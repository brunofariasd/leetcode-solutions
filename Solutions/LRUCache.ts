/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
  private capacity: number;
  private hash: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.hash = new Map();
  }

  get(key: number): number {
    if (!this.hash.has(key)) return -1;

    const value = this.hash.get(key)!;

    this.hash.delete(key);
    this.hash.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.hash.get(key)) {
      this.hash.delete(key);
    } else if (this.hash.size === this.capacity) {
      const keyToRemove = this.hash.keys().next().value;

      this.hash.delete(keyToRemove);
      this.hash.set(key, value);
    }
    this.hash.set(key, value);
  }
}
