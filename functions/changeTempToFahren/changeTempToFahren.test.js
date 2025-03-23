const changeTempToFahren = require('./changeTempToFahren')

describe('changeTempToFahren function', () => {
	test('converts 0°C to 32°F', () => {
		expect(changeTempToFahren(0)).toBe(32)
	})

	test('converts 100°C to 212°F', () => {
		expect(changeTempToFahren(100)).toBe(212)
	})

	test('converts -40°C to -40°F', () => {
		expect(changeTempToFahren(-40)).toBe(-40)
	})

	test('throws an error for non-numeric input', () => {
		expect(() => changeTempToFahren('hello')).toThrow('Input must be a number')
	})
})
