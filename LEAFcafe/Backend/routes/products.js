const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/products');


// path
router.get('/products', productControllers.getProducts);

router.post('/insert', productControllers.addProduct);

router.get('/edit-products/:product_id', productControllers.getEditProduct);

router.post('/edit-products', productControllers.editProduct);

router.get('/delete-products', productControllers.deleteProduct);

module.exports = router;