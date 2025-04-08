// Funny question

function checkInclusion(s1: string, s2: string): boolean {
  let rPoint = 0;
  let increment = s2.length;

  let hashS1 = new Map();
  for (let i = 0; i < s1.length; i++) {
    hashS1.set(s1[i], (hashS1.get(s1[i]) || 0) + 1);
  }

  let hashS2 = new Map();
  let lAux = 0;
  for (let lPoint = 0; lPoint < increment; lPoint++) {
    rPoint = lPoint + (s1.length - 1);
    if (rPoint > s2.length - 1) return false;

    lAux = lPoint;
    hashS2.clear();
    while (lAux <= rPoint) {
      hashS2.set(s2[lAux], (hashS2.get(s2[lAux]) || 0) + 1);

      if (hashS2.get(s2[lAux]) !== hashS1.get(s2[lAux])) lAux = rPoint + 1;

      if (lAux === rPoint) return true;

      lAux++;
    }
  }

  return false;
}
