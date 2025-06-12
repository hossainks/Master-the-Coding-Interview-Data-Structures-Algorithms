const numbers = [1, 2, 3, 4, 5];

function printAndSuminPairs(numbers) {
  console.log('Priting numbers');
  numbers.forEach((number) => {
    console.log(number);
  });
  console.log('===================== Sum of numbers============');
  numbers.forEach((firstNumber) => {
    numbers.forEach((secondtNumber) => {
      console.log(firstNumber + secondtNumber);
    });
  });
}

printAndSuminPairs(numbers);
