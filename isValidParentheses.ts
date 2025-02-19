function isValid(s: string): boolean {
  const endParent = [")", "]", "}"];

  if (s.length === 1) return false;
  if (endParent.includes(s[0])) return false;

  const hashObj: string[] = [];
  const patterns = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (endParent.includes(s[i])) {
      if (patterns[s[i]] !== hashObj.pop()) return false;
    } else {
      hashObj.push(s[i]);
    }
  }

  return hashObj.length === 0;
}
