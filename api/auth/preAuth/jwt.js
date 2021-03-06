const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const tokenTTL = process.env.TOKEN_TTL || '1d'
const db = require(_dbConfig)
module.exports = {
  genToken,
  chkToken,
  chkRole
};

//Creates a new JWT Token
function genToken(user) {
  delete user.password
  const payload = {
    tokenType: "Basic ",
    ...user
  };

  const options = {
    expiresIn: tokenTTL
  };

  return jwt.sign(payload, secret, options);
}
function chkRole(role){
    return (req,res,next)=>{
        //Gets req.user from chkToken
        if(req.user && role === req.user.role){
            next()
        } else {
            res.status(401).json({errors:[{token:'Invalid Access'}]});
        }
    }
}
//Verifies Existing Role and JWT token
function chkToken() {
  return (req, res, next) => {
    const token = req.headers.authorization;
    //TOKEN
    token &&
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
          //Needs Time Validation
          res
            .status(200)
            .json({
              errors: { token: "Invalid Token, you will need to Log back in" }
            });
        } else {
            console.log("REW",decoded)
            req.user = decoded;
            next();
        }
      });
    //No Token, No Pass
    !token &&
      res
        .status(401)
        .json({ error: "No Token Provided, you will need to Login" });
  };
}
