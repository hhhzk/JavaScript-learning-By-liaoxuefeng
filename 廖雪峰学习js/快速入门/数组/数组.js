var arr = [1,2,3.14,'Hello',null,true];
console.log(arr.length);


var arr = [1,2,3];
arr.length = 6;
console.log(arr);
arr.length = 2;
console.log(arr);


var arr = ['A','B','C'];
arr[1] = 99;
console.log(arr);


var arr = [10,20,'30','xyz'];
console.log(arr.indexOf(10));	//元素10的索引为0
console.log(arr.indexOf(30));	//元素30没有找到，返回-1


var arr = ['A','B','C','D','E','F','G'];
var aCopy = arr.slice();
console.log(aCopy);
console.log(aCopy === arr);


var arr = [1,2];
arr.push('A','B');
console.log(arr);
console.log(arr.pop());


var arr = [1,2];
arr.unshift('A','B');
console.log(arr);
console.log(arr.shift());


var arr = ['B','C','A'];
arr.sort();
console.log(arr);
console.log(arr.reverse());


var arr = ['Microsoft','Apple','Yahoo','AOL','Excite','Oracle'];
var arr1 = arr.splice(2,3,'Google','Facebook');
console.log(arr1);	// 返回删除的元素[ 'Yahoo', 'AOL', 'Excite' ]


var arr = ['A','B','C'];
var added = arr.concat([1,2,3]);
console.log(added);
console.log(arr);


var arr = ['A','B','C'];
var arr1 = arr.join('-');
console.log(arr1);


var arr = [[100,200,300],[400,500,600],'-'];
console.log(arr[1][1]);