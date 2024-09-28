const jwt = require('jsonwebtoken')

module.exports.checkAuth = async (req, res, next) => {
    const fullToken = req.headers.authorization
    if (fullToken) {
        const token = fullToken.split(" ")[1]
        try {
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            req.userId = decoded.id

            next()
        } catch (err) {
            return res.status(401).json({message: `No auth: ${err   }`})
        }
    } else {
        return res.status(401).json({message: "no token has been found"})
    }
}