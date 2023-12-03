const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type: String,
    },
})

userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.static.login = async function(mail,password) {
    const user = await this.findOne({mail})
    if (user) {
        
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            jsonwebtoken.sign({mail: user.mail, id:user._id})
            return user
        }
        throw Error("mot de passe incorrect")
    }
    throw Error("addresse mail incorrect")
}

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel