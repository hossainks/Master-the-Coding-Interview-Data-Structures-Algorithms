class Myarray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(data) {
    this.data[this.length] = data;
    this.length++;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    this.pop();
  }

  shiftItem(index) {
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
  }
}

const newArr = new Myarray();

newArr.push('hi');
newArr.push('you');
newArr.push('new');
newArr.push('data');
newArr.push('there');
newArr.push('info');

console.log(newArr);
console.log(newArr.get(0));
//console.log(newArr.pop());
newArr.delete(2);
newArr.push('phew');
newArr.push('ye');
console.log(newArr);
newArr.delete(2);
newArr.delete(4);
console.log(newArr);
