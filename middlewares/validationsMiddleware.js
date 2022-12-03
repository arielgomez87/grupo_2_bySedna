const { check } = require("express-validator");
const path = require('path');

const validations = [ /*este array contiene a los check del registro*/
    check('fullName').isLength({min:1}).withMessage('Debe ingresar un nombre'),
    check('address').isLength({min:1}).withMessage('Debe ingresar un direccion'),
    check("imageUser").custom((value, {req}) => {
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
    check("phoneNumber").notEmpty().withMessage('Debe ingresar un numero telefonico'),
    check('email')
        .notEmpty().withMessage("Debes escribir un Email").bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    check('password').isLength({min:3}).withMessage('Debe ingresar una contraseña de mas de 3 caracteres'),
]

module.exports = validations;