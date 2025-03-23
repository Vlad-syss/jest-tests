const calculateTotalPrice = require('./calculateTotalPrice')

describe('calculateTotalPrice func', () => {
	test('calculates total price without discount', () => {
		const items = [
			{ price: 10, quantity: 2 },
			{ price: 5, quantity: 3 },
		]
		expect(calculateTotalPrice(items)).toBe(35)
	})

	test('calculates total price with discount', () => {
		const items = [
			{ price: 20, quantity: 2 },
			{ price: 15, quantity: 1 },
		]
		expect(calculateTotalPrice(items, 10)).toBe(45) // 55 - 10%
	})

	test('throws an error for invalid items', () => {
		expect(() => calculateTotalPrice([{ price: -10, quantity: 2 }])).toThrow(
			'Invalid items array'
		)
	})
})
