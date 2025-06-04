/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 *
 */

class TrieNode {
  next: Map<string, TrieNode>;
  endWord: boolean;

  constructor() {
    this.next = new Map();
    this.endWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let rootNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!rootNode.next.has(word[i])) {
        rootNode.next.set(word[i], new TrieNode());
      }
      rootNode = rootNode.next.get(word[i])!;
    }
    rootNode.endWord = true;
  }

  search(word: string): boolean {
    let rootNode = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!rootNode.next.has(word[i])) {
        return false;
      } else {
        rootNode = rootNode.next.get(word[i])!;
      }
    }

    return rootNode.endWord;
  }

  startsWith(prefix: string): boolean {
    let rootNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (!rootNode.next.has(prefix[i])) {
        return false;
      } else {
        rootNode = rootNode.next.get(prefix[i])!;
      }
    }

    return true;
  }
}
