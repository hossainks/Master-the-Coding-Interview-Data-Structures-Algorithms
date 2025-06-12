const arr = [1, 3, 4, 5];
const sum = 8;

function checkPairWithSum(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

//console.log(checkPairWithSum(arr, sum));

function checkPairWithSumSet(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

const arr1 = [1, 3, 5, 4];
console.log(checkPairWithSumSet(arr1, sum));
