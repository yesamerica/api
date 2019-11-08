const primaryRouter = require("express").Router();

//Authentication
const jwt = require('./auth/preAuth/jwt')

//Bring in the Routes
const publicRouter = require("./public/server");
const privateRouter = require("./private/server");
//Login, Register, GoogleAuth, FaceBookAuth, GitHubAuth 
const authRouter = require("./auth/auth") 

//Implement Routes
primaryRouter.use('/',authRouter)
primaryRouter.use('/public',publicRouter)
primaryRouter.use('/private',jwt.chkToken(),privateRouter)

primaryRouter.use('/privacy',(req,res)=>{
    res.status(200).json({message:"Zero liability policy"});
})
primaryRouter.use('/terms',(req,res)=>{
    res.status(200).json({message:"Zero liability policy"});
})


module.exports = primaryRouter;
