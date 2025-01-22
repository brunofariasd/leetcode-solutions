function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sObj = {};
  const tObj = {};

  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = sObj[s[i]] ? sObj[s[i]] + 1 : 1;

    tObj[t[i]] = tObj[t[i]] ? tObj[t[i]] + 1 : 1;
  }

  const isAnagram = Object.keys(sObj).every((key) => {
    return sObj[key] === tObj[key];
  });

  return isAnagram;
}
