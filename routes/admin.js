const path = require('path');

const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
//const rootDir = require('../util/path');

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product',adminController.postAddProduct);


exports.routes = router;
// exports.products = products;