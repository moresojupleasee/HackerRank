arr = [1, 2, 3, 4, 3, 2, 1]

const lonelyInteger = (arr) => {
  let uniqueElement = 0
  for (let i = 0; i < arr.length; i++) {
    uniqueElement ^= arr[i] //  XORing the same value twice results in 0.
    console.log(uniqueElement)
  }
  return uniqueElement
}

console.log(lonelyInteger(arr))
