/**
 *
 * @param points
 * @param k
 */

function kClosest(points: number[][], k: number): number[][] {
  const auxArr: number[][] = [];

  for (let idx = 0; idx < points.length; idx++) {
    const result = Math.pow(points[idx][0], 2) + Math.pow(points[idx][1], 2);

    auxArr.push([idx, result]);
  }

  const res = auxArr.sort((a, b) => a[1] - b[1]).map((item) => points[item[0]]);

  return res.slice(0, k);
}
