const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/* ruta a todos los productos */
router.get("/", productController.products);

/*ruta a un solo producto*/
router.get("/detail/:id", productController.details);



module.exports = router;
