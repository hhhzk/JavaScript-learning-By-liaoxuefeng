var arr = [1,3,4,5,6];
var result = arr.reduce(function (x, y) {
	return x + y;
});

console.log(result);


var arr = [1,2,3,4,5];
var result = arr.reduce(function (x, y) {
	return x * y;
});

console.log(result);


var arr = [1,3,5,7,9];
var result = arr.reduce(function (x, y) {
	return x * 10 + y;
});

console.log(result);


function string2int (s) {
	var arr = s.split('').map(function (x) {
		return x - '0';
	});
	return arr.reduce(function (x, y) {
		return x * 10 + y;
	})
}

console.log(typeof string2int('12345'));


function normalize (arr) {
	function capitallize(x) {
		return x.charAt(0).toUpperCase() + x.slice(0).toLowerCase();
	}
	return arr.map(capitallize);
}

console.log(normalize(['ASD','dasd']));