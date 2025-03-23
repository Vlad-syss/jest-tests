function calculateTotalPrice(items, discount = 0) {
	if (
		!Array.isArray(items) ||
		items.some(item => item.price < 0 || item.quantity < 0)
	) {
		throw new Error('Invalid items array')
	}

	const subtotal = items.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)
	const discountAmount = subtotal * (discount / 100)

	return subtotal - discount
}

module.exports = calculateTotalPrice
