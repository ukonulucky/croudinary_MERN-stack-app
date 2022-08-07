const express = require("express")
const cloudinarySetting = require("../utils/cloudinary")
const upload = require("../utils/multer")

// routing for create, read, upadate and deleetion of images and videos from cloudinary and mondodb
const router = express.Router()

router.post("/api/saveImg", upload.single("Image"),async (req,res) => {
    try {
        console.log(req.body)
      return  res.json("server running")
    } catch (error) {
        
    }
})
