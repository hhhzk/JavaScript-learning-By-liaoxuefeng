var s = 'I\'m \"OK\"!';
console.log(s);

var s = `这是一个
多行
字符串`;
console.log(s);


var name = '小明';
var age = 20;
var message = '你好，' + name + '，你今年' + age + '岁了！';
console.log(message);
var message1 = `你好，${name}，你今年${age}岁了！`;
console.log(message1);


var s = 'Hello, world!';
console.log(s.length);
console.log(s[1]);
console.log(s[100]);	//超出范围的索引不会报错，但一律返回undefined


var s = 'Test';
s[0] = 'X';
console.log(s);	//字符串是不可变的


var s = 'Hello';
console.log(s.toUpperCase());
console.log(s.toLowerCase());


var s = 'hello, world!';
console.log(s.indexOf('world'));
console.log(s.indexOf('World'));	//没有找到指定的子串，返回-1


var s = 'hello, world!';
console.log(s.substring(0, 5));	//hello
console.log(s.substring(7));