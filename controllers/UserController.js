const UserModel = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function create(req, res){
    try {
        const user = new UserModel({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            lastname: req.body.lastname
        })
        const document = await user.save()
        res.json(document)

    } catch (error) {
        res.status(500).json(error)
    }
}

async function login(req, res){
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if(!user){
            res.json({error:true, message: "Incorrect mail"})
        }
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({userId:user._id}, req.app.get("secretKey"), {expiresIn: "1h"})
            res.json(token)
        }else{
            res.json({error:true, message: "Incorrect password"})
        }
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

module.exports = {
    create,
    login
}