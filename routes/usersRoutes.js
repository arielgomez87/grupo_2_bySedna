const { Console } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require ("../middlewares/multerMiddleware") /* este requiere al multer que ahora es un middleware*/
const usersController = require('../controllers/usersController');
const validations = require("../middlewares/validationsMiddleware") /*este require hace referencia al middleware que 
                                                                                contiene las validaciones*/
const { body, validationResult } = require('express-validator');


//Mostrará el formulario de creación para un producto
router.get('/register', guestMiddleware, usersController.register);

//Deberá recibir los datos del formulario de creación
router.post('/register', upload.single("imageUser"), /*este array contiene a los check del registro*/
    body('fullName').isLength({min:1}).withMessage('Debe ingresar un nombre'),
    body('address').isLength({min:1}).withMessage('Debe ingresar un direccion'),
    body("phoneNumber").notEmpty().withMessage('Debe ingresar un numero telefonico'),
    body("province").notEmpty().withMessage('Debe seleccionar una provincia'),
    body("imageUser").custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", "gif"];
        
        if (!file){
            throw new Error("Tienes que adjuntar un imagen");
        } else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivos permitidas son ${acceptedExtensions.join(", ")}`)
            }
        }
        return true;
    }),
    body('email')
        .notEmpty().withMessage("Debes escribir un Email").bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    body('password').isLength({min:3}).withMessage('Debe ingresar una contraseña de mas de 3 caracteres'),  
            usersController.processRegisterNewUser);

 router.get('/login', guestMiddleware, usersController.login);

 router.post('/login',/*  validations, */ usersController.loginProcess);

 //mostrara la pagina del usuario                                                                              
 router.get("/profile", authMiddleware, usersController.profile)

 router.get('/logout', usersController.logout);

 //Botón MODIFICAR: modificará al usuario
router.get('/edit/:id', usersController.edit);

//Deberá recibir los datos del formulario de edición
router.post('/edit/:id',upload.single("imageUser"), usersController.update);

//Botón BORRAR: eliminará al usuario
router.post("/delete/:id", usersController.delete);


module.exports = router;