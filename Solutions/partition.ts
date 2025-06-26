/**
 *
 * @param s
 * @returns
 */

function partition(s: string): string[][] {
  const res: string[][] = [];

  function isPalindrome(left: number, right: number): boolean {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  function DFS(start: number, end: number, arr: string[]) {
    if (end >= s.length) {
      if (start === end) {
        res.push([...arr]);
      }
      return;
    }

    if (isPalindrome(start, end)) {
      arr.push(s.substring(start, end + 1));

      DFS(end + 1, end + 1, arr);

      arr.pop();
    }

    DFS(start, end + 1, arr);
  }

  DFS(0, 0, []);

  return res;
}
