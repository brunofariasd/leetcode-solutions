function groupAnagrams(strs: string[]): string[][] {
  const objectGroup = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");

    objectGroup[sortedStr] = objectGroup[sortedStr]
      ? [...objectGroup[sortedStr], strs[i]]
      : [strs[i]];
  }

  return Object.values(objectGroup);
}
