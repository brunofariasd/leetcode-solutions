/**
 * Review it again in the future. Interesting question.
 */

function characterReplacement(s: string, k: number): number {
  let hashChar = new Map();
  let biggestFreqChar = 0;
  let lPoint = 0;
  let res = 0;

  for (let rPoint = 0; rPoint < s.length; rPoint++) {
    hashChar.set(s[rPoint], (hashChar.get(s[rPoint]) || 0) + 1);
    biggestFreqChar = Math.max(biggestFreqChar, hashChar.get(s[rPoint]));

    while (rPoint - lPoint + 1 - biggestFreqChar > k) {
      hashChar.set(s[lPoint], hashChar.get(s[lPoint]) - 1);
      lPoint++;
    }

    res = Math.max(res, rPoint - lPoint + 1);
  }

  return res;
}
