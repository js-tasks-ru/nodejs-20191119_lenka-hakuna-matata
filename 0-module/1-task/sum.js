function sum(a, b) {
	if(typeof a != 'number' || typeof b != 'number')
		throw new TypeError("rrrrrr");
	return a + b;
}

module.exports = sum;
