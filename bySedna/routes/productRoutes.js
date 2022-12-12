const express = require('express');
const router = express.Router();
const multer = require ("multer");
const path = require ("path");
const productController = require('../controllers/productController');
const validationsProduct = require("../middlewares/validationsMiddlewareProduct") /*este require hace referencia al middleware que 
                                                                                contiene las validaciones*/
const { body, validationResult } = require('express-validator');


var multerStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/images/products")
    },
    filename: (req, file, cb) =>{
        cb( null, "img-" + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({storage: multerStorage})

/* ruta a todos los productos */
router.get("/", productController.products);

/*ruta a un solo producto*/
router.get("/detail/:id", productController.detail);

//ruta para Crear producto
//muestra el formulario de creacion
router.get("/create", productController.create );
//recibe los datos del formulario de creacion
router.post("/create", upload.single("productImage"),validationsProduct, productController.store);

//ruta par Editar producto
//ruta que muestra el editor con los datos a completar
router.get("/edit/:id", productController.edit);
//ruta que recibe las modificaciones
router.post("/edit/:id", upload.single("productImage"),validationsProduct, productController.update);

//ruta para eliminar productos
router.post("/delete/:id", productController.delete);

                                                    /*store, update y destroy. tiene solo "/dato" no hace falta referenciar la otra
                                                    parte de la ruta porque como son post, put y delete nunca van a venir por url
                                                    por ende nunca se va v acunfundir el navegador.*/




module.exports = router;
