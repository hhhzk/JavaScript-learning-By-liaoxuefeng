## 变量作用域
如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量：
````
'use strict';

function foo() {
	var x = 1;
}

x;	// ReferenceEror！无法再函数体外部引用变量x
````
如果两个不同的函数各自申明了同一个变量，那么该变量值在各自函数体内起作用，也就是说两个变量互相不影响。
同时，JavaScript的函数可以嵌套，也就是内部函数可以访问外部函数定义的变量
````
function foo () {
	var x = 1;
	function bar () {
		var y = x + 1;	//bar可以访问foo的变量x
	}
	var z = y + 1;	//foo不可以访问bar的变量y
}
````

### 变量提升
JavaScript的函数定义有个特点，会吧所有申明的变量提升到函数顶部：
````
function foo() {
	var x = 'hello,' + y;
	alert(x);
	var y = 'hhhzk';
}

foo();	//hello,undefined
````
上述代码相当于：
````
function foo() {
	var y
	var x = 'hello,' + y;
	alert(x);
	y = 'hhhzk';
}
````

### 全局作用域
JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性：
````
var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'
````
<strong>在实际测试中window.course是undefined！</strong><em>疑问！</em>

### 名字空间
全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中：
````
var PERSON = {};

PERSON.name = 'hhhzk';
PERSON.age = 23;

PERSON.run = function () {
	return 'running!;
}
````
把自己的代码全部放入唯一的名字空间中，会大大减少全局变量冲突的可能。

### 局部作用域
````
'use strict'

function foo() {
	for (var i = 1; i < 100; i++) {
		return i;
	}
	i += 100;	//仍然可以使用变量
}
````
为了解决这个问题，ES6引入了let关键词，用来代替var来申明一个块级作用域的变量：

````
'use strict'

function foo() {
	for (let i = 1; i < 100; i++) {
		return i;
	}
	i += 100;	//SyntaxError
}
````

### 常量
ES6通过const来定义常量，和let一样都具有块级作用域
````
const PI = 3.14;
PI = 3;
PI;	//3.14
````