var m = new Map([['Michael',95],['Bob',80],['Tracy',90]]);
console.log(m.get('Michael'));


var m = new Map();
m.set('Adam', 67);
m.set('Bob', 59);
console.log(m.has('Adam'));
console.log(m.get('Adam'));
m.delete('Adam');
console.log(m.get('Adam'));	//undefined


var m = new Map();
m.set('Adam',67);
m.set('Adam',88);
console.log(m.get('Adam'));



var s1 = new Set();
var s2 = new Set([1,2,3]);

var s = new Set([1,2,3,'3']);
console.log(s);
s.add(4);
console.log(s);
s.delete(3);
console.log(s);