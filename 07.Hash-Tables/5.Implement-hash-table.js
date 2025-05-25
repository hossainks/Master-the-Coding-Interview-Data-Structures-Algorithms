class Hashtable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key) {
    const getHash = this._hash(key);
    const currentBucket = this.data[getHash];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][1]) {
        console.log(currentBucket[i][1]);
      }
    }
  }
  /*   keys() {
    let getkeys = [];
    let key = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        getkeys.push(...this.data[i]);
      }
    }
    for (let keys of getkeys) {
      key.push(keys[0]);
    }
    return key;
  } */

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // Handle collisions: nested arrays like [ ["grapes", 10000], ["apples", 54] ]
        for (const [key, _] of this.data[i]) {
          keysArray.push(key);
        }
      }
    }
    return keysArray;
  }
}

const myHashTaBle = new Hashtable(50);
myHashTaBle.set('test', 10000);
myHashTaBle.set('hello', 500);
myHashTaBle.set('grapes', 4000);
myHashTaBle.set('grapes', 4000);

console.log(myHashTaBle);
myHashTaBle.get('hello');
myHashTaBle.get('test');
myHashTaBle.get('grapes');
console.log(myHashTaBle.keys());
