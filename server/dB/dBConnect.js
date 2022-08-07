const mongoose = require("mongoose")
require("dotenv").config()
const MONGO_URL = process.env.MONGU_URL

const dBConnect = async () => {

     try {
         const mongooseResponse = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedToPology: true
         })
        
         if (mongooseResponse) {
             return mongooseResponse
         }
     } catch (error) {
        console.log(error.message)
     }
}

module.exports = dBConnect

