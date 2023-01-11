const { compare } = require("bcryptjs")
const {check} = require("express-validator")
const db = require("../db")


//Password
const password = check("password").isLength({min: 6, max: 15}).withMessage("Password has to be between 6 and 15 characters.")

//email
const email = check("email").isEmail().withMessage("Must follow a valid Email format.")

//check email exists
const emailExists = check("email").custom( async (value) => {
    const {rows} = await db.query("select * from museum_users where email = $1", [value])

    if(rows.length){
        throw new Error("Email already in use")
    }
})

//login validation
const loginFieldsCheck = check("email").custom( async (value, {req}) => {
   const user = await db.query("select * from museum_users where email=$1", [value])

   if(!user.rows.length){
    throw new Error ("The email does not exist.")
   }
   
   const validPassword = await compare(req.body.password, user.rows[0].password)

   if(!validPassword){
    throw new Error ("Incorrect password")
   }

   req.user = user.rows[0]
})


module.exports = {
    registerValidation: [email, password, emailExists],
    loginValidation: [loginFieldsCheck]
}