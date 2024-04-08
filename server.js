const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin"),
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Middleware
app.use(bodyParser.json());

// Import routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);
const clientPrice = require('/routes/clientPrice');
app.use('/price', clientPrice);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));