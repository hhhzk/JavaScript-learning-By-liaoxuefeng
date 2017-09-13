// function abs (x) {
// 	if (x >= 0) {
// 		return x;
// 	} else {
// 		return -x;
// 	}
// }

// console.log(abs(-99));	//99


// var abs = function (x) {
// 	return x >=0 ? x : -x;
// };

// console.log(abs(-22));
// console.log(abs(22,12));
// console.log(abs());


// function foo (x) {
// 	console.log(x);
// 	for (var i = 0; i < arguments.length; i++) {
// 		console.log(arguments[i]);
// 	}
// }

// foo(10,20,30);


// function abs () {
// 	if (arguments.length == 0) {
// 		return '没有输入内容';
// 	} else {
// 		return arguments[0] >=0 ? arguments[0] : -arguments[0];
// 	}
// }

// console.log(abs());


function foo (a,b) {
	var i, rest = [];
	if (arguments.length > 2) {
		for (i = 2; i < arguments.length; i++) {
			rest.push(arguments[i]);
		}
	}
	console.log('a=' + a);
	console.log('b=' + b);
	console.log(rest);
}

foo(1,2,3,4,5,6);


function foo (a, b, ...rest) {
	console.log('a=' + a);
	console.log('b=' + b);
	console.log(rest);
}

foo(1,2,3,4,5,7);


function area_of_circle (r, pi) {
	if (arguments.length == 1) {
		return r * r * 3.14;
	} else {
		return r * r * pi;
	}
}

console.log(area_of_circle(2));


function sum (...rest) {
	function add (a, b) {
		return a + b;
	}
	return rest.reduce(add, 0);
}

console.log(sum(1,2,3,4,5));