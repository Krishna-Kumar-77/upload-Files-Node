const path = require("path")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
    //   const ext = file.mimetype.split("/")[1];
    //   cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
        let ext = path.extname(file.originalname)
        cb(null, Date.now()+ ext)
    },
});
  
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
       // console.log(file.mimetype);
        if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
          callback(null,true)  
        } else {
            console.log('Only jpg & png files are supported');
            callback(null,false)  
        }
    },
    limits: {
        fileSize:1024 * 1024 * 2
    }
})

module.exports = upload;