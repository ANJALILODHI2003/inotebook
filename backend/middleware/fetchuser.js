const jwt = require('jsonwebtoken');
const JWT_SECRET ="i am anjali";

const fetchuser =(req,res,next) =>{
    //get the user from the jwt token and add id to req object
   const token = req.header('auth-token');
   if (!token) {
     console.log("here also")
        res.status(401).send({error : "please authentication here using a valid token"})
   } 
   try {
    
    const data = jwt.verify(token,JWT_SECRET)
    req.user = data.user;
     next();
    
   } catch (error) {
     console.log(error);
    res.status(401).send({error : "please authentication using a valid token"})
   }
 
}
module.exports = fetchuser;
