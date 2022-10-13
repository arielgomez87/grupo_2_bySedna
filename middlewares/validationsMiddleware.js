const { check } = require("express-validator");

const validations = [ /*este array contiene a los check del registro*/
    check('full_name').isLength({min:1}).withMessage('Debe ingresar un nombre'),
    check('user_name').isLength({min:1}).withMessage('Debe ingresar un usuario'),
    check('address').isLength({min:1}).withMessage('Debe ingresar un direccion'),
    check("province").notEmpty().withMessage('Debe seleccionar una provincia'),
    check("phone_number").notEmpty().withMessage('Debe ingresar un numero telefonico'),
    check('email')
        .notEmpty().withMessage("Debes escribir un Email").bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    check('password').isLength({min:3}).withMessage('Debe ingresar una contraseña de mas de 3 caracteres'),
    check('confirm_password').isLength({min:3}).withMessage('Debe ingresar nuevamente la Contraseña'),
]

module.exports = validations;