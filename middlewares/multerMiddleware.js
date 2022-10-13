const multer = require('multer');

var multerStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) =>{
        cb(null, "avatar-" + Date.now() + path.extname(file.originalname))
    }
    })

var upload = multer({storage: multerStorage})

module.exports = upload;