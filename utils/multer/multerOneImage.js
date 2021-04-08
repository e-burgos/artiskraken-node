const multer = require('multer');
const path = require('path');

function multerOneImage(folder) {
    const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/images/${folder}`)
        },
        filename: function (req, file, cb) {
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
        }
    });
    
    const upload = multer({ storage: storage });
    return upload;
}

module.exports = multerOneImage;