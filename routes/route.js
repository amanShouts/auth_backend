const express = require("express")
const authRouter = express.Router()

authRouter.post("/register", (res, req) => {
    // extract username and password from body 
    const { username, password } = req.body
    console.log(username, password)

    // hash this password 
    // generate a token from jwt 
})


authRouter.post("/login", (req, res) => {

})


authRouter.get("/check", (req, res) => {

})



module.exports = { authRouter }
