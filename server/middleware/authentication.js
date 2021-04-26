const jwt = require("jsonwebtoken");
const User = require("../schema_or_models/userSchema");
const userAuthentication = async function (req, res, next) {
  try {
    const cookieStoredToken = req.cookies.jsonWebToken;
    //jwt.verify(token, secretOrPublicKey, [options, callback])
    const verifyToken = jwt.verify(cookieStoredToken, process.env.SECRET__KEY);
    // console.log(verifyToken); jo token cookie ma save ha usko sath secret key ko match
    // kry or pata chalai ga ka ya secret key iske cookie ke ha agr same hote ha to us cookie ka sath jitna ba data attach krwaya hoga apna like idd email etc sab mily ga
    // console.log(verifyToken.email);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": cookieStoredToken,
    });
    req.token = cookieStoredToken;
    req.rootUser = rootUser;
    req.id = rootUser._id;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Not An Authorized User Please Login First" });
    console.error(error);
  }
};
module.exports = userAuthentication;
