const mongoose = require('mongoose');
const ClientPrice = require('./clientPrice');

const ClientPriceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  specialPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('ClientPrice', ClientPriceSchema);