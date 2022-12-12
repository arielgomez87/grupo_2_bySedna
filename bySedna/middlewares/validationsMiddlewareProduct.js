const { body } = require("express-validator");
const path = require('path');

const validationsProduct = [//validacion producto
 body("name").isLength({min:5}).withMessage("Completa el nombre del producto"),
 body("price").isLength({min:4}).withMessage("Completa el valor del producto"),
 body("discount").isLength({min:1}).withMessage("Completa el descuento del producto"),
 body("sizes").notEmpty().withMessage("Elige el talle o los talles del producto"),
 body("description").isLength({min:10}).withMessage("Completa una descripcion del producto"),
 body("productImage").custom((value, {req}) => {
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
 ]

 module.exports = validationsProduct;