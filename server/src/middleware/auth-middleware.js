const passport = require("passport")

//protects the route
exports.userAuth = passport.authenticate("jwt", {session: false})