function reverseStr(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return;
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

function reverseStr(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return;
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

function reverseStr(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

function arrayReveresd(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return;
  let reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}

const shortWayReverse = (str) => str.split('').reverse().join('');
const shortWay2 = (str) => [...str].reverse().join('');

const testStr = 'hi, my name is Andre';
console.log(reverseStr(testStr));
console.log(arrayReveresd(testStr));
console.log(shortWayReverse(testStr));
console.log(shortWay2(testStr));
