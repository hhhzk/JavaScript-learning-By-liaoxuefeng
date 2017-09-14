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


