const passport = require("passport")
const {Strategy} = require("passport-jwt")
const {SECRET} = require("../constants")
const db = require("../db")


//check if the user sends a cookie called token - can return the token if so
const cookieExtractor = function (req){
    let token = null
    if(req && req.cookies) token = req.cookies["token"]
    return token
}

//
const opts = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor
}

passport.use(
    new Strategy(opts, async({id}, done) => {
        try {
            const {rows} = await db.query(
                "select id, email from museum_users where id =$1", [id]
            )

            if(!rows.length){
                throw new Error("401 not authorised")
            }

            let user = {id: rows[0].id, email: rows[0].email}

            await done(null,user)
        } catch (error) {
            console.log(error.message)
            done(null, false)
        }
    })
)