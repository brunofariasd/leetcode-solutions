function carFleet(target: number, position: number[], speed: number[]): number {
  if (position.length === 1) return 1;

  let count = 0;
  const hashObj = {};

  //HashMap
  for (let i = 0; i < position.length; i++) {
    hashObj[position[i]] = speed[i];
  }

  const keys = Object.keys(hashObj)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((key) => parseInt(key));

  for (let i = 0; i < Object.keys(hashObj).length; i++) {
    const positionA = keys[i];
    const speedA = hashObj[keys[i]];

    const positionB = keys[i + 1];
    const speedB = keys[i + 1];

    if (positionA - target / speedA >= positionB - target / speedB) {
      delete hashObj[keys[i + 1]];
      count++;
    } else {
      delete hashObj[keys[i]];
      count++;
    }
  }
  return count;
}
