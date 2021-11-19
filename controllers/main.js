//check username/password in post(login) request
//if exists create new JWT
//send back to frontend

//setup authentication so only the request with JWT can access the dashboard
const {badRequestError} = require('../errors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req,res) => {
    const { username,password } = req.body
    if(!username || !password){
        throw new badRequestError('Please provide email and passowrd')
    }
    //provided by DB, but for now:
    const id = new Date().getDate()

    //keep payload small
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg: 'user created',token})
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({msg:`Hello ${req.user.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    dashboard,
    login
}