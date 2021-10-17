const jwt = require('jsonwebtoken');
const secretKey = require('../config/keys').secretKey

module.exports = function (req, res, next){
    const token = req.header('login-token');
    if(!token) {
        return res.status(401).send("Access denied. No token Provided.");
    }
    try {
        const decodedPayLoad = jwt.verify(token, secretKey);
        // console.log(decodedPayLoad);
        req.user = decodedPayLoad;
        next();
    }
    catch (err){
        res.status(400).send('Invalid token.');
    }
}
