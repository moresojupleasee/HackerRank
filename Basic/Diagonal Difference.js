matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]

const diagonalDifference = (matrix) => {
  const length = matrix.length
  let ltrdiagonal = 0,
    rtldiagonal = 0

  for (let i = 0; i < length; i++) {
    ltrdiagonal += matrix[i][i]
    rtldiagonal += matrix[i][length - i - 1]
  }
  return Math.abs(ltrdiagonal - rtldiagonal)
}

console.log(diagonalDifference(matrix))
