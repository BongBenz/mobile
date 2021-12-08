const Product = require('../models/products');


exports.getProducts = (req, res, next) => {
    Product.findAll().then(products => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
        // console.log(products);
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
        // console.log(error);
    });
}

exports.addProduct = (req, res, next) => {

}

exports.getEditProduct = (req, res, next) => {
    
}

exports.editProduct = (req, res, next) => {
    
}

exports.deleteProduct = (req, res, next) => {
    
}