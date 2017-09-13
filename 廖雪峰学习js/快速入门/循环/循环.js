var x = 0;
var i;
for (i = 1; i <= 10000; i++) {
	x = x + i;
}

console.log(x);


var x = 1;
var i;
for (i = 2; i <= 10; i ++) {
	x = x * i;
}

console.log(x);


var arr = ['Apple','Google','Microsoft'];
var i, x;
for (i = 0; i < arr.length; i++) {
	x = arr[i];
	console.log(x);
}


var o = {
	name: 'Jack',
	age: 20,
	city: 'Beijing'
};

for (var key in o) {
	console.log(key);
}


var o = {
	name: 'Jack',
	age: 20,
	city: 'Beijing'
};
for (var key in o) {
	if (o.hasOwnProperty(key)) {
		console.log(key);
	}
}


var a = ['A','B','C'];
for (var i in a) {
	console.log(i);
	console.log(a[i]);
}


var x = 0;
var n =99;
while (n > 0) {
	x = x + n;
	n = n - 2;
}

console.log(x);


var arr = ['Bart','Lisa','Adam'];
for (var i in arr) {
	console.log(arr[i]);
}

for (var i of arr) {
	console.log(i);
}