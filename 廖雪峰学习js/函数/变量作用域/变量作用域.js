'use strict';

function foo () {
	var x = 1;
	x = x + 1;
}

//console.log(x);	//x is not defined


function foo () {
	var x = 1;
	function bar () {
		var y = x + 1;	//bar可以访问foo的变量x
	}
	var z = y + 1;	//foo不可以访问bar的变量y
}