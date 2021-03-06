// const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('admin/add-product', 
    {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        productCSS: true,
        formsCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price)
    product.save();
    //products.push({title: req.body.title})
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    Product.fetchALL((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products', 
            path: '/admin/products'
        });
    });
}