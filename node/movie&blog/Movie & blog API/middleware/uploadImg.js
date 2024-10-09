const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        let fillname = Date.now() + "-" + file.originalname;
        cb(null, fillname)
    }
});

const upload = multer({ storage: storage });

module.exports = upload;