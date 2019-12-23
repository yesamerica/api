const privateRouter = require('express').Router()
const usersRouter = require('./users/users')
//Routes
privateRouter.use('/user',usersRouter)
module.exports=privateRouter