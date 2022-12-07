const { body } = require("express-validator");
const path = require('path');

const validations = [ /*este array contiene a los check del registro*/
body('fullName').isLength({min:2}).withMessage('Debe ingresar un nombre y apellido con minimo 2 caracteres'),
body('address').isLength({min:5}).withMessage('Debe ingresar un direccion con minimo 5 caracteres'),
body("phoneNumber").isLength({min:8}).withMessage('Debe ingresar un telefono con minimo 8 numeros'),
body("province").notEmpty().withMessage('Debe seleccionar una provincia'),
body("imageUser").custom((value, {req}) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg",".png", "gif"];
    
    if (file){
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Las extensiones de archivos permitidas son ${acceptedExtensions.join(", ")}`)
        }
    } 
    return true;
}),
body('email')
    .isLength({min:5}).withMessage("Debes escribir un Email con miimo 5 caracteres").bail()
    .isEmail().withMessage('Debes ingresar un email valido'),
body('password').isLength({min:8}).withMessage('Debe ingresar una contraseña de mas de 8 caracteres'),  
]

module.exports = validations;