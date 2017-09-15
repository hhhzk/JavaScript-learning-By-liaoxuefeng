var arr = [10,20,1,2];
var r = arr.sort(function (x, y) {
	if (x < y) {
		return 1;
	}
	if (x > y) {
		return -1;
	}
	return 0;
});

console.log(r);