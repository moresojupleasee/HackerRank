let median = 0
arr = [1, 5, 2, 4, 3, 8, 6]
arr.sort((a, b) => a - b)

function findMedian(arr) {
  let mid = Math.floor(arr.length / 2)
  if (arr.length % 2 === 1) median = arr[mid]
  // if (arr.length % 2 === 0) median = (arr[mid] + arr[mid - 1]) / 2

  return median
}

console.log(findMedian(arr))
