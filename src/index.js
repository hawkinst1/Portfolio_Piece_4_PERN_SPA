const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const {PORT, CLIENT_URL} = require("./constants")
const passport = require("passport")
const cors = require("cors")

//import passport middleware
require("./middleware/passport-middleware")

//initialise middlewares
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}))

//import Routes
const authRoutes = require("./routes/auth")

//Initialise routes
app.use("/api", authRoutes)

//app start
const appStartUp = () => {
    try {
        app.listen(PORT, () => { 
            console.log(`Server listening on http://localhost:${PORT}`)
            
        })
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

appStartUp()