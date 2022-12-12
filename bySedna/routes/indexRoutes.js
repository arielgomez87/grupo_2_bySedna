const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

const apiProduct = require('../controllers/Api/productsControllerApi');
const apiController = require('../controllers/Api/categoriesControllerApi');
const apiUsers = require('../controllers/Api/userControllerApi');

router.get('/', indexController.home);
// router.get('/login', indexController.login);
// router.get('/register', indexController.register);
router.get('/cart', indexController.cart);

router.get('/api/products',apiProduct.products);
router.get('/api/categories',apiController.categories);
router.get('/api/users',apiUsers.users);

module.exports = router;