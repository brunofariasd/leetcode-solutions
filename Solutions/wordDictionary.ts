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

  DFS(word: string, currentIdx: number, root: TrieNode) {
    let currNode = root;

    for (let idx = currentIdx; idx < word.length; idx++) {
      const c = word[idx];

      if (c === ".") {
        for (const child of currNode.next) {
          if (currNode !== null && this.DFS(word, idx + 1, child[1])) {
            return true;
          }
        }
        return false;
      } else {
        if (!currNode.next.has(c)) {
          return false;
        }
        currNode = currNode.next.get(c)!;
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
    }
    currNode.endWord = true;
  }

  search(word: string): boolean {
    return this.DFS(word, 0, this.root);
  }
}
