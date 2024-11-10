const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
