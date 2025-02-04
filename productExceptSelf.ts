function productExceptSelf(nums: number[]): number[] {
  const arrPrefix = Array(nums.length).fill(1);
  const arrPostfix = Array(nums.length).fill(1);
  const arrProduct = Array(nums.length).fill(1);

  const arrLength = nums.length - 1;

  arrPrefix[0] = nums[0];
  arrPostfix[arrLength] = nums[arrLength];
  for (let i = 1; i <= arrLength; i++) {
    arrPrefix[i] = arrPrefix[i - 1] * nums[i];

    arrPostfix[arrLength - i] =
      arrPostfix[arrLength - i + 1] * nums[arrLength - i];
  }

  arrProduct[0] = arrPostfix[1];
  arrProduct[arrLength] = arrPrefix[arrLength - 1];
  for (let i = 1; i < arrLength; i++) {
    arrProduct[i] = arrPrefix[i - 1] * arrPostfix[i + 1];
  }

  return arrProduct;
}
