## map/reduce
### map
比如我们有一个函数f(x)=x2，要把这个函数作用在一个数组[1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map实现如下：

![图1](http://upload-images.jianshu.io/upload_images/5531033-72e3d3682cd16e11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

利用map函数的计算方式：
````
function pow(x) {
	return x * x;
}

var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.map(pow));
````
map()作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的f(x)=x2，还可以计算任意复杂的函数，比如，把Array的所有数字转为字符串：
````
var arr = [1,2,3,4,5,6];
var result = arr.map(String);
console.log(result);
````

### reduce
````
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
````
使用reduce求和：
````
var arr = [1,3,4,5,6];
var result = arr.reduce(function (x, y) {
	return x + y;
});

console.log(result);
````
### 练习
#### 不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数：
````
function string2int (s) {
	var arr = s.split('').map(function (x) {
		return x - '0';
	});
	return arr.reduce(function (x, y) {
		return x * 10 + y;
	})
}

console.log(typeof string2int('12345'));
````
#### 请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字:
````
function normalize (arr) {
	function capitallize(x) {
		return x.charAt(0).toUpperCase() + x.slice(0).toLowerCase();
	}
	return arr.map(capitallize);
}

console.log(normalize(['ASD','dasd']));
````