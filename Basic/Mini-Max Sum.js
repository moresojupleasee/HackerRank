var arr = [1, 3, 5, 7, 9]
const miniMaxSum = (arr) => {
  var smallest = arr[0]
  var sum = 0
  var maximum = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i]
    if (arr[i] > maximum) maximum = arr[i]
    sum += arr[i]
  }
  console.log(sum - maximum, sum - smallest)
}
miniMaxSum(arr)
