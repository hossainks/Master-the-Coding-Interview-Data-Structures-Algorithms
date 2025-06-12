// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

const arr1 = ['a', 'c', 'd', 'x'];
const arr2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
  if (!arr1?.length || !arr2?.length) {
    return false;
  }
  const arrObj = {};
  /*   for (let item of arr1) {
    arrObj[item] = item;
  } */

  for (let item of arr1) {
    if (!arrObj[item]) {
      arrObj[item] = true;
    }
  }

  for (let item of arr2) {
    if (arrObj[item]) {
      return true;
    }
  }
  return false;
}
console.log(containsCommonItem(arr1, arr2));
