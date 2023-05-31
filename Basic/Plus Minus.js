//Solution 1
const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zero = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++
    else if (arr[i] < 0) negative++
    else if (arr[i] == 0) zero++
  }
  const positiveRatio = positive / arr.length
  const negativeRatio = negative / arr.length
  const zeroRatio = zero / arr.length

  // Print ratios upto 6 decimal places
  console.log(positiveRatio.toFixed(6))
  console.log(negativeRatio.toFixed(6))
  console.log(zeroRatio.toFixed(6))
}
plusMinus(arr)

// Solution 2
// using filter method

const plusMinusAlt = (arr) => {
  let positive = arr.filter((number) => number > 0).length / arr.length
  let negative = arr.filter((number) => number < 0).length / arr.length
  let zero = arr.filter((number) => number == 0).length / arr.length
  console.log(
    positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zero.toFixed(6)
  )
}
plusMinusAlt(arr)
