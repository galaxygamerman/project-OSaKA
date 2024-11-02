const mongoose = require('mongoose');

// Define a schema and model for your data
const MenuItemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
})

const orderSchema = new mongoose.Schema({
	name: String,
	items: [MenuItemSchema],
	price: Number,
	state: String
});
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;