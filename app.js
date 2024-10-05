const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
