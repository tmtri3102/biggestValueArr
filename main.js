let arr = [123, 32432, 23, 32, 32, 12];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
	}
}
console.log(max);
