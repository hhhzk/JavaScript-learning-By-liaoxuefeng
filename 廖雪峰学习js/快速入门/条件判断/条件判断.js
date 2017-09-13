var age = 20;
if (age >= 18) {
	console.log('adult');
} else {
	console.log('teeenageer');
}


var age = 20;
if (age >= 18) {
	console.log('adult');
} else {
	console.log('teenager');
}


var age = 3;
if (age >= 18) {
	console.log('adult');
} else if (age >= 6) {
	console.log('teenager');
} else {
	console.log('kid');
}


var height = 1.73;
var weight = 56;
var bmi = weight / (height * height);
if (bmi < 18.5) {
	console.log('过轻');
} else if (bmi < 25) {
	console.log('正常');
} else if (bmi < 28) {
	console.log('过重');
} else if (bmi < 32) {
	console.log('肥胖');
} else {
	console.log('严重肥胖');
}