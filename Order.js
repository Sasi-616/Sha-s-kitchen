const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String, required: true },
  address: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', OrderSchema);
