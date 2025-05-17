//require in jsonwebtoken
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    //get the request authorization headers
    const authHeader = req.headers['authorization']

    //split the token off
    const token = authHeader && authHeader.split(' ')[1]

    //check if there is a token
    if(!token) {
        return res.status(401).json({
            success : false,
            message : 'Access denied - no token provided. Please log in to continue'
        })
    }

    //decode the token to get user info
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userInfo = decodedToken

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }

    next()
}

module.exports = authMiddleware