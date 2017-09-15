## 字符串
JavaScript的字符串就是用''或者""括起来的字符表示。

### 多行字符串
用反引号 ` ... ` 表示
````
`这是一个
多行
字符串
`
````

### 模板字符串
把多个字符串连接起来。用+连接:
````
var name = '小明';
var age = 20;
var message = '你好，' + name + '，你今年' + age + '岁了'。
console.log(message);
````
或者在ES6新增的莫办字符串：
````
var name = '小明';
var age = 20;
var message = `你好，${name}，你今年${age}岁了。`
console.log(message);
````

### 操作字符串
````
var s = 'Hello, world!';
s.length; //13
s[0];	//'H'
````
字符串是不可变的。

### 其他一些操作
toUpperCase():把一个字符串全部变为大写。
toLowerCase():把一个字符串全部变为小写。
indexOf:搜索指定字符串出现的位置。
substring:返回指定索引区间的子串。