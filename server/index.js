const express = require("express")
const cors = require("cors")
const UserModel = require("./models/user")
const jsonwebtoken = require("jsonwebtoken")
const app = express()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin: "ip",
}))


app.get("/test", (req,res) => {
    res.json("test ok")
})

app.post("/register", async (req,res) => {
    const {name, mail, password} = req.body;
    
    try {
        const user = await UserModel.create({
            name,
            mail,
            password
        })

        res.json({user});
    }  
    catch(err) {
        res.status(400).json(err)
    }
    
})

app.post("/login", async(req, res) => {
    const {email} = req.body 
    const user = awaitUserModel.findOne({email})
    if (user) {
        res.json("Correspondance")
    } else {
        res.json("Aucune correspondance")
    }
})
app.listen(port)