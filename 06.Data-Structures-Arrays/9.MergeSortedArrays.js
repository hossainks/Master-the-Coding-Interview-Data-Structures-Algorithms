/* function mergeSortedArray(arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];

  for (let i = 0; i < mergedArr.length; i++) {
    if (mergedArr[i] > mergedArr[i + 1]) {
      let min = mergedArr[i + 1];
      mergedArr[i + 1] = mergedArr[i];
      mergedArr[i] = min;
    }
  }
  return mergedArr;
} */

function mergeSortedArray(array1, array2) {
  if (arr1.length <= 0 || arr2.length <= 0) return;
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // arr1 = [0, 3, 4]; arr2=  [4, 6, 30];

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

const arr1 = [0, 3, 4];
const arr2 = [4, 6, 30];

console.log(mergeSortedArray(arr1, arr2));
