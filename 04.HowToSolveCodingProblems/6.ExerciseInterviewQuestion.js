const arr1 = ['a', 'c', 'd', 'x'];
const arr2 = ['z', 'y', 'f'];

function containsCommonItem(arr1, arr2) {
  if (!arr1?.length || !arr2?.length) {
    return false;
  }

  return arr1.some((item) => arr2.includes(item));
}
console.log(containsCommonItem(arr1, arr2));
