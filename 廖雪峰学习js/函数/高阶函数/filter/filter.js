// var arr = [1,2,3,4,5,6,7];
// var r = arr.filter(function (x) {
// 	return x % 2 != 0;
// });

// console.log(r);


var arr = ['A','B','C'];
var r = arr.filter(function (element, index, self)  {
	console.log(element);
	console.log(index);
	console.log(self);
	return true;
});

console.log(r);


var arr = ['apple','egg','banana','apple','pear'];
var r = arr.filter(function (element, index, self) {
	return self.indexOf(element) === index;
});

console.log(r);


var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var r = arr.filter(function (x) {
	if (x <= 1) {
		return false;
	} else {
		for (let i = 2; i < x / 2; i++) {
			if (x % i == 0) {
				return false;
			}
		}
		return true;
	}
});

console.log(r);