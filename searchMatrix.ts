function searchMatrix(matrix: number[][], target: number): boolean {
  let rowL = 0;
  let rowR = matrix.length - 1;

  let arrL = 0;
  let arrR = matrix[0].length - 1;

  while (rowL <= rowR) {
    const halfI = rowL + Math.floor((rowR - rowL) / 2);

    if (target >= matrix[halfI][0] && target <= matrix[halfI][arrR]) {
      const arr = matrix[halfI];

      while (arrL <= arrR) {
        const halfArrI = arrL + Math.floor((arrR - arrL) / 2);

        if (arr[halfArrI] === target) return true;

        if (arr[halfArrI] > target) {
          arrR = halfArrI - 1;
        } else {
          arrL = halfArrI + 1;
        }
      }
      return false;
    }

    if (matrix[halfI][0] > target) {
      rowR = halfI - 1;
    } else {
      rowL = halfI + 1;
    }
  }

  return false;
}
