const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
]

const flippingMatrix = (matrix) => {
  let n = matrix.length / 2
  let max = 0
  let totalSum = 0

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      max = Number.MIN_VALUE
      max = Math.max(matrix[row][col], max)
      max = Math.max(matrix[row][2 * n - col - 1], max)
      max = Math.max(matrix[2 * n - row - 1][col], max)
      max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max)

      totalSum += max
    }
  }
  return totalSum
}

console.log(flippingMatrix(matrix))
