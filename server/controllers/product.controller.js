// Importing required dependencies
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route to create a new product
router.post('/products', async (req, res) => {
  try {
    // Extracting product details from the request body
    const { name, price, desc, img } = req.body;
    
    // Creating a new Product instance
    const product = new Product({ name, price, desc, img });

    // Saving the new product to the database
    await product.save();

    // Responding with the created product
    res.status(201).json(product);
  } catch (error) {
    // Handling errors and responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to edit an existing product
router.put('/products/:id', async (req, res) => {
  // Extracting product ID from the request parameters
  const id = req.params.id;
  
  // Extracting updated product details from the request body
  const { name, price, desc, img } = req.body;

  try {
    // Updating the product in the database and getting the updated product
    const newProduct = await Product.findByIdAndUpdate(
      id, { name, price, desc, img }, { new: true }
    );

    // Responding with the updated product
    res.status(200).json(newProduct);
  } catch (error) {
    // Handling errors, logging them, and responding with a 500 Internal Server Error
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete an existing product
router.delete('/products/:id', async (req, res) => {
  // Extracting product ID from the request parameters
  const id = req.params.id;

  try {
    // Deleting the product from the database and responding with the result
    Product.deleteOne({ _id: id }).then((result) => { 
      res.status(200).json({ result: result });
    });
  } catch (error) {
    // Handling errors, logging them, and responding with a 500 Internal Server Error
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error: ' + error });
  }
});

// Route to get all products
router.get('/products/', async (req, res) => {
  try {
    // Fetching all products from the database
    const products = await Product.find();
    
    // Responding with the fetched products
    res.status(200).json(products);
  } catch (error) {
    // Handling errors and responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get a product by its ID
router.get('/products/:id', async (req, res) => {
  // Extracting product ID from the request parameters
  const id = req.params.id;

  try {
    // Fetching a product by its ID from the database
    const products = await Product.find({ _id: id });
    
    // Responding with the fetched product(s)
    res.status(200).json(products);
  } catch (error) {
    // Handling errors and responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for a test endpoint
router.get('/test/', async (req, res) => {
  try {
    // Responding with a simple message
    res.status(200).json({ message: "Hello world." });
  } catch (error) {
    // Handling errors, logging them, and responding with a 500 Internal Server Error
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Exporting the router for use in other parts of the application
module.exports = router;
