// Use a graph to visualize the problem, u can use a L and R aproch for it. It's easy cmon.

function maxProfit(prices: number[]): number {
  if (prices.length === 1) return 0;

  let minValue: number = prices[0];
  let maxPrice: number = 0;

  for (let i = 1; i < prices.length; i++) {
    maxPrice = Math.max(maxPrice, prices[i] - minValue);
    minValue = Math.min(minValue, prices[i]);
  }

  return maxPrice;
}
