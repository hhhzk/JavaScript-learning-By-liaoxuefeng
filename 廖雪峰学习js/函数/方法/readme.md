## 方法
### 在一个对象中绑定函数，成为这个对象的方法。
给hhhzk绑定一个函数，就可以做很多事情，比如写个age()方法：
````
var hhhzk = {
	name: 'hhhzk',
	birth: 1995,
	age: function () {
		var y = new Date().getFullYear();
		return y - this.birth;
	}
};

console.log(hhhzk.age);	
console.log(hhhzk.age());
````
this是一个特殊变量，始终指向当前对象，也就是hhhzk这个变量。
<strong>在JavaScript内部调用了this，那么这个this的指向视情况而定。</strong>
如果以对象的方法形式调用，那么就指向该对象；
如果单独调用函数，则this指向全局变量。
````
var fn = hhhzk.age;
fn();	//NaN
````
要保证this的指向正确，必须用对象的方法形式调用。
````
//一个修改的方法

var hhhzk = {
	name: 'hhhzk',
	birth: 1995,
	age: function () {
		var that = this;
		function getAgeFromBirth() {
			var y = new Date().getFullYear();
			return y - that.birth;
		}
		return getAgeFromBirth();
	}
};

console.log(hhhzk.age());

````

### apply
要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
````
function getAge() {
	var y = new Date().getFullYear();
	return y - this.birth;
}

var hhhzk = {
	name: 'hhhzk',
	birth: 1995,
	age: getAge
};

console.log(hhhzk.age());
console.log(getAge.apply(hhhzk, []));
````