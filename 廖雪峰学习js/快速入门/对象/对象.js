var xiaoming = {
	name: '小明',
	birth: 1990,
	schiil: 'No.1 Middle School',
	height: 1.70,
	weight: 65,
	score: null
};

console.log(xiaoming.name);
console.log(xiaoming.birth);


var xiaohong = {
	name: '小红',
	'middle-school': 'No.1 Middle School'
};

console.log(xiaohong['middle-school']);
console.log(xiaohong['name'] === xiaohong.name);


var xiaoming = {
	name: '小明'
};

console.log(xiaoming.age);	//undefined
xiaoming.age = 18;
console.log(xiaoming.age);	//新增一个age属性
delete xiaoming.age;
console.log(xiaoming.age);	//undefined 删除了


var xiaoming = {
	name: '小明',
	birth: 1990,
	school: 'No.1 Middle School',
	height: 1.70,
	weight: 65,
	score: null
};

//判断一个对象是否拥有某一属性，可以用in操作符
console.log('name' in xiaoming);
console.log('grade' in xiaoming);
console.log('toString' in xiaoming);
//判断一个属性是否能是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法
console.log(xiaoming.hasOwnProperty('name'));
console.log(xiaoming.hasOwnProperty('toString'));