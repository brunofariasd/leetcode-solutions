function isPalindrome(s: string): boolean {
  if (s.length === 1) return true;

  const onlyLetters = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  const reverseString = onlyLetters.split("").reverse().join("");

  return onlyLetters === reverseString;
}
