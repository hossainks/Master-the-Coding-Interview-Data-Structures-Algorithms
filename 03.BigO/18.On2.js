const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printAllPairs(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    for (let j = i; j < inputs.length; j++) {
      console.log(inputs[i], inputs[j]);
    }
  }
}
printAllPairs(boxes);
// O(n^2) time complexity
