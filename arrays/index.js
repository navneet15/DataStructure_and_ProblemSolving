// Find the second largest in an array

function getSecondLargest(array) {
  let largest = 0;
  let secondLargest = -1;
  // Finding the largest element
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[largest]) largest = i
  }

  // Finding the second largest number by excluding the largest number
  for (let j = 0; j < array.length; j++) {
    if (array[j] !== array[largest]) {
      if (secondLargest == -1)
        secondLargest = j;
      else if (array[j] > array[secondLargest])
        secondLargest = j;
    }
  }

  if (secondLargest === -1) return secondLargest
  else return array[secondLargest]
}


console.log(getSecondLargest(["5", "5", "4", "2"]))