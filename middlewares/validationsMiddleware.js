const { body } = require("express-validator");
const path = require('path');

const validations = [ /*este array contiene a los check del registro*/
body('fullName').isLength({min:2}).withMessage('Nombre y apellido debe tener minimo 2 caracteres'),
body('address').isLength({min:5}).withMessage('Domicilio debe tener minimo 5 caracteres'),
body("phoneNumber").isLength({min:8}).withMessage('Telefono debe tener minimo 8 numeros'),
body("province").notEmpty().withMessage('Debe seleccionar una provincia'),
body("imageUser").custom((value, {req}) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg",".png", "gif"];
    
    if (file){
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Las extensiones de archivos permitidas son: ${acceptedExtensions.join(", ")}`)
        }
    } 
    return true;
}),
body('email')
    .isLength({min:5}).withMessage("Completa tu email con minimo 5 caracteres validos").bail()
    .isEmail().withMessage('Por favor ingrese un email valido'),
body('password').isLength({min:8}).withMessage('Contraseña debe tener minimo 8 caracteres'),  
]

module.exports = validations;