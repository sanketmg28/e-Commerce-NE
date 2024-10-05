const ProductModel = require('../models/productModel');

const getProducts = (req, res) => {
    const products = ProductModel.getAllProducts();
};

const getHomePage = (req, res) => {
    res.render('index');
};

module.exports = { getProducts, getHomePage };

