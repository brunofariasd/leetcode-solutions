function minEatingSpeed(piles: number[], h: number): number {
  let leftI = 1;
  let rightI = Math.max(...piles);
  let res = 0;

  while (leftI <= rightI) {
    let halfI = leftI + Math.floor((rightI - leftI) / 2);

    let guestK = 0;
    for (let i = 0; i <= piles.length - 1; i++) {
      guestK += Math.ceil(piles[i] / halfI);
    }

    if (guestK > h) {
      leftI = halfI + 1;
    } else {
      res = halfI;
      rightI = halfI - 1;
    }
  }

  return res;
}
