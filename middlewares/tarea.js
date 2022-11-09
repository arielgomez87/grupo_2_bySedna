//Queremos particularmente en este momento validar el campo “email”.
//Hay que tener en cuenta las siguientes validaciones:
//Que no esté vacío.
//Que sea un dato de tipo email.
//Si algunas de estas validaciones no se cumple, enviar el mensaje “Ingresar un email válido”.
//Para ello, te vamos a pedir que, dentro de tu middleware de validación, valides el campo “email” con los requerimientos que especificamos arriba.

const {check} = require("express-validator");
module.exports = [
    check ("email")
        .notEmpty()
        .isEmail()
        .withMessage("Ingresar un email válido"),
]




const {check} = require('express-validator');
const {check} = require("express-validator");
module.exports = [
   check('name')
       .notEmpty()
       .withMessage('Ingresar un nombre')
       .isLength({min: 2})
       .withMessage('El nombre debe tener mas de dos caracteres'),
   check('email')
       .notEmpty()
       .isEmail()
       .withMessage('Ingresar un email válido'),
   check('contrasenia')
       .isLength({min: 8})
       .withMessage('La contrasenia deberia tener un minimo de 8 caracteres')
]