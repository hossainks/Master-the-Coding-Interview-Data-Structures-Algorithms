const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(nemo);

const findNemo2 = (array) => {
  array.forEach((i) => {
    if (i === 'nemo') console.log('Found Nemo!');
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === 'nemo') console.log('Found Nemo!');
  }
};
