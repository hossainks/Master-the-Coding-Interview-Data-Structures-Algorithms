const string = ['a', 'c', 'd', 'e'];
console.log(string[1]);

string.push('f');

string.pop();
string.pop();

string.unshift('x');

string.splice(2, 0, 'alien');

console.log(string);
