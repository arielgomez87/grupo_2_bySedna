const { body } = require("express-validator");
const path = require('path');

const validationsProduct = [//validacion producto
 body("name").isLength({min:5}).withMessage("Completa el nombre del producto con minimo 5 caracteres"),
 body("price").isLength({min:4}).withMessage("Completa el valor del producto con minimo 4 digitos"),
 body("discount").isLength({min:1}).withMessage("Completa el descuento del producto con minimo 1 digito"),
 body("sizes").notEmpty().withMessage("Elige un talle o mas del producto"),
 body("description").isLength({min:10}).withMessage("Completa una descripcion del producto con minimo 10 caracteres"),
 body("productImage").custom((value, {req}) => {
     let file = req.file;
     let acceptedExtensions = [".jpg", ".jpeg",".png", ".gif"];
     
     if (file){
         let fileExtension = path.extname(file.originalname);
         if(!acceptedExtensions.includes(fileExtension)){
             throw new Error(`Las extensiones de archivos permitidas son: ${acceptedExtensions.join(", ")}`)
         }
     } 
     return true;
 }),
 ]

 module.exports = validationsProduct;