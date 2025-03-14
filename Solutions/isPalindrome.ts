function isPalindrome(s: string): boolean {
  if (s.length === 1) return true;

  const onlyLetters = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  const midLength = Math.trunc(onlyLetters.length / 2);

  for (let i = 0; i < midLength; i++) {
    if (onlyLetters[i] !== onlyLetters[onlyLetters.length - 1 - i])
      return false;
  }

  return true;
}
