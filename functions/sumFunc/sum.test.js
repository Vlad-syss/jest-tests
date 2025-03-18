const sum = require('./sum')

describe('test for sum', () => {
	test('exact value', () => {
		expect(sum(1, 2)).toBe(3)
	})
	test('exact value', () => {
		expect(sum(5, 2)).toBe(7)
	})
	test('exact value', () => {
		expect(sum(6, 2)).toBe(8)
	})
})
