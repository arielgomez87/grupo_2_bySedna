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
    validations, usersController.processRegisterNewUser);

 router.get('/login', guestMiddleware, usersController.login);

 router.post('/login',/*  validations, */ usersController.loginProcess);

 //mostrara la pagina del usuario                                                                              
 router.get("/profile", authMiddleware, usersController.profile)

 router.get('/logout', usersController.logout);

 //Botón MODIFICAR: modificará al usuario
router.get('/edit/:id', usersController.edit);

//Deberá recibir los datos del formulario de edición
router.post('/edit/:id',upload.single("imageUser"), validations, usersController.update);

//Botón BORRAR: eliminará al usuario
router.post("/delete/:id", usersController.delete);


module.exports = router;