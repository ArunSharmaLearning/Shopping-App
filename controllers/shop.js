const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchALL((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
            hasProducts: products.length > 0,
            productCSS: true,
            activeShop: true
        });
    });
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', { product: product, pageTitle: product.title, path: '/products' });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchALL((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'shop',
            path: '/'
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Chekout'
    })
}