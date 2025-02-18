//REVIEW IT AGAIN, IT'S EASYYY

function maxArea(height: number[]): number {
  let leftCorner = 0;
  let rightCorner = height.length - 1;
  let result = 0;

  for (let i = 0; i < height.length - 1; i++) {
    const capacity =
      Math.min(height[leftCorner], height[rightCorner]) *
      (rightCorner - leftCorner);

    result = Math.max(capacity, result);

    height[leftCorner] > height[rightCorner] ? rightCorner-- : leftCorner++;
  }

  return result;
}
