const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
// router.get('/login', indexController.login);
// router.get('/register', indexController.register);
router.get('/cart', indexController.cart);

module.exports = router;