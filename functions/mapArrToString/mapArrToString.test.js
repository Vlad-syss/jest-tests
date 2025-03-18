const mapArrToString = require('./mapArrToString')

describe('mapArrToString', () => {
	test('exact value', () => {
		expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
	})
	test('without garbish value', () => {
		expect(mapArrToString([1, 2, 3, undefined, '5'])).toEqual(['1', '2', '3'])
	})
	test('empty value', () => {
		expect(mapArrToString([])).toEqual([])
	})
	test('objections', () => {
		expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4])
	})
})
