const express = require("express")
require("dotenv").config()
const dBConnect = require("./dB/dBConnect")
const cors = require("cors")


const app = express()
// middleware
app.use(express.json({
    limit:"50mb"
}))
app.use(cors())

// Routes

// server port 
const port = process.env.PORT || 7000



//setting server

const dBServerConnect = async () => {
    
    try {  
        const dbResponse = await dBConnect()
        if (dbResponse) {
            app.listen(port, () => {
                console.log("DB connected and Server running on PORT", port )
            })
        }
    
  } catch (error) {
    console.log(error.message)
    }
    
}
dBServerConnect()




