const express = require("express")
const cors = require("cors")
const UserModel = require("./models/user")
const app = express()
const cookieParser = require("cookie-parser")
const jsonwebtoken = require("jsonwebtoken")

app.use(express.json())
app.use(cookieParser())
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

app.get("/profile", (req,res) => {
    const {token} = req.cookies
    if (token) {
        jsonwebtoken.verify(process.env.TOKEN_SECRET, {}, async (err, user)=> {
            if (err) throw err;
            const {name,mail,_id} = await UserModel.findById(user.id)
            res.json({name,mail,_id})
        })
    } else {
        res.json(null)
    }
    res.json("user info")
})

app.post("/logout" , (req,res) => {
    res.cookie("token", "").json(true)
})

app.listen(port)