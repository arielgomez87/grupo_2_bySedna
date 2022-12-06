const { body } = require("express-validator");
const path = require('path');

const validations = [ /*este array contiene a los check del registro*/
body('fullName').isLength({min:2}).withMessage('Debe ingresar un nombre'),
body('address').isLength({min:2}).withMessage('Debe ingresar un direccion'),
body("phoneNumber").notEmpty().withMessage('Debe ingresar un numero telefonico'),
body("province").notEmpty().withMessage('Debe seleccionar una provincia'),
body("imageUser").custom((value, {req}) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg",".png", "gif"];
    
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
body('password').isLength({min:8}).withMessage('Debe ingresar una contraseña de mas de 8 caracteres'),  
]

module.exports = validations;