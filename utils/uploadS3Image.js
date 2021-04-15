require('dotenv').config();
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3Config = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    Bucket: process.env.AWS_BUCKET_NAME
  });

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let f = new Date();
let date = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
let time = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();

function uploadS3Image(folder) {
    const uploadImage = multer({
        storage: multerS3({
            s3: s3Config,
            bucket: process.env.AWS_BUCKET_NAME,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                var newFileName = date + '-' + time + '-' + file.originalname;
                var fullPath = `${folder}/` + newFileName;
                cb(null, fullPath)
            }
        }),
        fileFilter: fileFilter,
        limits: {
            fileSize: 1024 * 1024 * 5 // we are allowing only 5 MB files
        }
    });
    return uploadImage;
};

module.exports = uploadS3Image; 