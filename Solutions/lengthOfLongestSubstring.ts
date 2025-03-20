// Use a linear metric to visualize the problem, u can use a L and R aproch for it. It's easy.

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  let hashObj = {};
  let leftIndx = 0;
  let biggestSeq = 0;

  for (let currentIndx = 0; currentIndx < s.length; currentIndx++) {
    if (hashObj[s[currentIndx]] !== undefined) {
      leftIndx = Math.max(hashObj[s[currentIndx]] + 1, leftIndx);
    }
    hashObj[s[currentIndx]] = currentIndx;
    biggestSeq = Math.max(biggestSeq, currentIndx - leftIndx + 1);
  }

  return biggestSeq;
}
