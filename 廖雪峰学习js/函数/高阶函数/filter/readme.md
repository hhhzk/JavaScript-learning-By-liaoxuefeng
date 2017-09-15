## filter
filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。

#### 删掉偶数，返回奇数
````
var arr = [1,2,3,4,6,7];
var r = arr.filter(function(x) {
	return x % 2 != 0;
});

console.log(r);
````

#### 删掉空字符串
````
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r; // ['A', 'B', 'C']
````

### 回调函数
filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：
````
var arr = ['A','B','C'];
var r = arr.filter(function (element, index, self)  {
	console.log(element);
	console.log(index);
	console.log(self);
	return true;
});

console.log(r);
````

#### 去掉array重复元素
````
var arr = ['apple','egg','banana','apple','pear'];
var r = arr.filter(function (element, index, self) {
	return self.indexOf(element) === index;
});

console.log(r);
````

#### 筛选素数
````
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
````