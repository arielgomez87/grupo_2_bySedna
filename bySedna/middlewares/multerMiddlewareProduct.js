const multer = require('multer');
const path = require ("path");

var multerStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'public/images/product')
    },
    filename: (req, file, cb) =>{
        cb(null, "product-" + Date.now() + path.extname(file.originalname))
    }
    })

var upload = multer({storage: multerStorage})

module.exports = upload;