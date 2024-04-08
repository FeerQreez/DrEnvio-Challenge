// Importamos los modelos Product y ClientPrice,
const Product = require("../models/product");
const ClientPrice = require("../models/clientPrice");


exports.getInStockProducts = async (req, res) => {
  try {
    const inStockProducts = await Product.find({ inStock: true });
    res.json(inStockProducts);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPrice = async (req, res) => {
  const { user_id, nombre_producto } = req.params;
  try {
    const product = await Product.findOne({ name: nombre_producto });
    if (!product) {
      return res.status(404).send("Product not found");
    }
    const specialPrice = await ClientPrice.findOne({
      userId: user_id,
      productName: nombre_producto,
    });

    const price = specialPrice ? specialPrice.specialPrice : product.price;
    res.json({ price });
  } catch (error) {
    res.status(500).send(error);
  }
  const Product = require('../models/product');
exports.getProductById = async (req, res) => {

  try {
    const product = await Product.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
};