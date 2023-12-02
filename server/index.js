const express = require("express")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const app = express()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin: "ip",
}))


app.get("/test", (req,res) => {
    res.json("test ok")
})

app.post("/register", (req,res) => {
    const {name, mail, password} = req.body;
    res.json({name,mail,password});
})
app.listen(port)