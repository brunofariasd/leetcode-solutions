function containsDuplicate(nums: number[]): boolean {
  const obj = {};

  const isDuplicate = nums.every((key) => {
    obj[key] = obj[key] ? obj[key] + 1 : 1;

    return obj[key] < 2;
  });

  return !isDuplicate || false;
}
