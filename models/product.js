const mongoose = require('mongoose');
const ClientPrice = require('./clientPrice');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: false,
  },
  
    name: {
      type: String,
      required: true,
    },
});

ProductSchema.statics.getProductById = async function (id) {

    try {
  
      const product = await this.findById(id);
  
      if (!product) {
  
        return null;
  
      }
  
      return product;
  
    } catch (err) {
  
      throw new Error(err);
  
    }
  
  };

module.exports = mongoose.model('Product', ProductSchema);




