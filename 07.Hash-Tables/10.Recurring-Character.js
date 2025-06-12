const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];

function recurringCheck(arr) {
  let recurObj = {};
  for (let item of arr) {
    if (recurObj[item]) {
      return `Item found ${item}`;
    }
    recurObj[item] = true;
  }
  return `Item Not found ${undefined}`;
}

function recurringCheck2(arr) {
  let recurObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (recurObj[arr[i]] !== undefined) {
      return `Item found ${arr[i]}`;
    }
    recurObj[arr[i]] = i;
  }
  return `Item Not found ${undefined}`;
}

function recurringNotEffieicent(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return `Item found ${arr[i]}`;
      } else if (arr[j] === arr[j + 1]) {
        return `Item found ${arr[j]}`;
      }
    }
  }

  return `Item Not found ${undefined}`;
}

console.log(recurringCheck(array3));
console.log(recurringNotEffieicent(array3));
console.log(recurringCheck2(array3));
