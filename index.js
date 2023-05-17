const express = require("express")
const cors = require("cors")
const { authRouter } = require("./routes/route")

const app = express()

app.use(cors())
app.use(express.json())

// router file
app.use("/user", authRouter)

// for testing server 
app.get("/", (req, res) => {
    res.send("hitting home page ")
})




app.listen(3005, (err) => {
    if (err)
        console.log("error is ", err)
    else
        console.log("Server has started at http://localhost:3005")
})