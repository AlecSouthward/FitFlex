const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./controllers/product.controller');
const userRoutes = require('./controllers/user.controller');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://Alec:admin@cluster.pr7wfn1.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// Routes
app.use('/api', productRoutes, userRoutes); // All product-related routes start with /api

app.use('test', (req, res) => {
  res.status(200).json({ test_message: "Hello, World!" })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const server = app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

module.exports = server;