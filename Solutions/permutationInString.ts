// Funny question. Review this code again.

function checkInclusion(s1: string, s2: string): boolean {
  //Frequency
  let hashS1 = new Map();
  for (let i = 0; i < s1.length; i++) {
    hashS1.set(s1[i], (hashS1.get(s1[i]) || 0) + 1);
  }

  let isValid = true;
  let hashS2 = new Map();

  let lAux = 0;
  let lPoint = 0;
  let rPoint = lPoint + (s1.length - 1);

  while (rPoint <= s2.length - 1) {
    lAux = lPoint;
    hashS2.clear();
    while (lAux <= rPoint) {
      hashS2.set(s2[lAux], (hashS2.get(s2[lAux]) || 0) + 1);
      lAux++;
    }

    isValid = true;
    hashS1.forEach((value, key) => {
      if (hashS2.get(key) !== value && rPoint <= s2.length - 1 && isValid) {
        isValid = false;
      }
    });
    if (isValid) return true;

    lPoint++;
    rPoint = lPoint + (s1.length - 1);
  }

  return false;
}
