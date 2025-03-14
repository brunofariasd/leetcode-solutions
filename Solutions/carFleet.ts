function carFleet(target: number, position: number[], speed: number[]): number {
  if (position.length === 1) return 1;

  let count = 1;
  const hashObj = {};

  //HashMap
  for (let i = 0; i < position.length; i++) {
    hashObj[position[i]] = speed[i];
  }

  const keys = Object.keys(hashObj)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((key) => parseInt(key));

  let previousT = (keys[0] - target) / hashObj[keys[0]];
  for (let i = 1; i < keys.length; i++) {
    const currentT = (keys[i] - target) / hashObj[keys[i]];

    if (previousT > currentT) {
      count++;
      previousT = currentT;
    }
  }
  return count;
}
