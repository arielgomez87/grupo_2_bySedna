const { Console } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require ("../middlewares/multerMiddleware") /* este requiere al multer que ahora es un middleware*/
const usersController = require('../controllers/usersController');
const middlewareRutas = require ("../middlewares/ejemploRutas")
const validations = require("../middlewares/validationsMiddleware") /*este require hace referencia al middleware que 
                                                                                contiene las validaciones*/


//Mostrará el formulario de creación para un producto
router.get('/register', guestMiddleware, usersController.register);

//Deberá recibir los datos del formulario de creación
router.post('/register', upload.single("avatar"), validations , usersController.processRegisterNewUser);

router.get('/login', guestMiddleware, usersController.login);

router.post('/login', validations, usersController.loginProcess);

router.get('/logout', usersController.logout);

//Botón MODIFICAR: modificará al usuario
router.get('/profile', authMiddleware, usersController.profile);
//Deberá recibir los datos del formulario de edición

router.put('/:id', usersController.update);

//Botón BORRAR: eliminará al usuario
router.delete('/:id', usersController.destroy);


module.exports = router;