## 数组
JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
取得Array的长度，直接访问length属性：
````
var arr = [1,2,3,4,5,6];
console.log(arr.length);
````
<strong style="colro:red">请注意：</strong>直接给Array的length赋值会导致Array大小的变化。
Array可以通过索引把队形的元素修改为新的值。

### indexOf
与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置：
````
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2
````

### slice
slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array：
````
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']

````
注意到slice()的起止参数包括开始索引，不包括结束索引。
如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array。

### push和pop
push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉

### shift和unshift
shift()向Array的头部添加若干元素，unshift()则把Array的头部元素删除掉

### sort
sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：
````
var arr = ['B','A','C'];
arr.sort();
console.log(arr);
````

### reverse
给Array的元素翻转。

### splice
从指定的索引开始删除若干元素，然后再从该位置添加若干元素。
[W3cschool介绍](http://www.w3school.com.cn/jsref/jsref_splice.asp)

### concat
把当前的Array和另一个Array连接起来，并返回一个新的Array

请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array

### join
把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串

### 多维数组
````
var arr = [[1,2,3],[4,5,6]];
console.log(arr[1][2]);
````