function iterationFibonacci(n) {
  let arr = [];
  let number1 = 0;
  let number2 = 1;
  for (let i = 0; i < n; i++) {
    arr.push(number1);
    let temp = number2;
    number2 = temp + number1
    number1 = temp
  }
  return arr
}

console.log(iterationFibonacci(8))

function recursiveFibonacci(n, number1 = 0, number2 = 1, arr = []) {
  if (n === 0) {
    return arr;
  } else {
    arr.push(number1);
    return recursiveFibonacci(n - 1, number2, number1 + number2, arr);
  }
}

console.log(recursiveFibonacci(8))

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const arr = [12, 11, 13, 5, 6, 7, 99];
console.log(mergeSort(arr))
