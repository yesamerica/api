const privateRouter = require('express').Router()
const usersRouter = require('./users/users')
const jwt = require(_jwt)
privateRouter.use('/users',usersRouter)
module.exports=privateRouter