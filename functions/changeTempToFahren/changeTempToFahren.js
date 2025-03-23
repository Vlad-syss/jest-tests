function changeTempToFahren(celsius) {
	if (typeof celsius !== 'number') {
		throw new Error('Input must be a number')
	}
	return (celsius * 9) / 5 + 32
}

module.exports = changeTempToFahren
