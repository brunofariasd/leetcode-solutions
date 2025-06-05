/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class TrieNode {
  next: Map<string, TrieNode>;
  endWord: boolean;

  constructor() {
    this.next = new Map();
    this.endWord = false;
  }
}

class WordDictionary {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  getIndex(c: string) {
    return c.charCodeAt(0) - "a".charCodeAt(0);
  }

  DFS(word: string, currentIdx: number, root: TrieNode) {
    let currNode = root;

    for (let idx = currentIdx; idx < word.length; idx++) {
      const c = word[idx];

      if (c === ".") {
        for (let i = 0; i < currNode.next.size; i++) {
          if (currNode !== null && this.DFS(word, idx + 1, currNode)) {
            return true;
          }
        }
        return false;
      } else {
        const ind = this.getIndex(c);

        if (!currNode.next.has(word[ind])) {
          return false;
        }
        currNode = currNode.next.get(word[ind])!;
      }
    }

    return currNode.endWord;
  }

  addWord(word: string): void {
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!currNode.next.has(word[i])) {
        currNode.next.set(word[i], new TrieNode());
      }
      currNode = currNode.next.get(word[i])!;
      currNode.endWord = true;
    }
  }

  search(word: string): boolean {
    return this.DFS(word, 0, this.root);
  }
}
