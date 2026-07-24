const jwt = require('jsonwebtoken')

function authUser(req, res, next) {

    console.log("Cookies:", req.cookies);

    const token = req.cookies.token;

    console.log("Token:", token);

    if (!token) {
        return res.status(401).json({
            message: "Please Authenticate the user & Token not found"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERET);

        console.log("Decoded:", decoded);

        req.user = decoded;
        next();

    } catch (error) {
        console.log(error);

        return res.status(400).json({
            message: "Token is invalid / expired"
        });
    }
}

module.exports = {
    authUser
}