const multer = require('multer');
const path = require('path');

function multerProducts(folder, avatar, gallery) {
    const storage = multer.diskStorage({
    destination: function (req, file, cb) {
            cb(null, `public/images/${folder}`);
        },
        filename: function (req, file, cb) {
            cb(
                null,
                file.fieldname + "-" + Date.now() + path.extname(file.originalname)
            );
        },
    });
    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            if (
                file.mimetype == "image/png" ||
                file.mimetype == "image/jpg" ||
                file.mimetype == "image/jpeg"
            ) {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
            }
        },
    });
    imagesUpload = upload.fields([{ name: avatar, maxCount: 1 }, { name: gallery, maxCount: 3 }])
    return imagesUpload;
}

module.exports = multerProducts;