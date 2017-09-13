var a = ['A','B','C'];
var s = new Set(['A','B','C']);
var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
for (var x of a) {
	console.log(x);
}
for (var x of s) {
	console.log(x);
}
for (var x of m) {
	console.log(x);
}


var a = ['A','B','C'];
a.name = 'Hello';
for (var x in a) {
	console.log(x);	//有name
}

for (var x of a) {
	console.log(x); //没有name属性
}


var a = ['A','B','C'];
a.forEach(function (element, index, arrat) {
	//element: 指向当前元素的值
	//index: 指向当前索引
	//array: 指向Array对象本身
	console.log(element);
})


var s = new Set(['A','B','C']);
a.forEach(function (element, sameElement, set) { 
	console.log(element);
})


var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
m.forEach(function (value, key, map) {
	console.log(value);
})


var a = ['A','B','C'];
a.forEach(function (element) {
	console.log(element);
})