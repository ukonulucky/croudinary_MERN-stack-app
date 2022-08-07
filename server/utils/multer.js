const multer = require("multer")
const path = require("path")
const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req,file,cb) => {
        const exname = path.extname(file.originalname)
        if (exname !== ".jpg" && exname !== ".jpeg" && exname !== "png" & exname !== ".svg")  {
            cb(new Error("invalid file image format", false))
            return
        }
        cb(null, true)
    }
   
})

module.exports = upload