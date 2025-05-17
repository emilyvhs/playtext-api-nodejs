//check if user has admin role
const isAdminUser = (req, res, next) => {
    if(req.userInfo.role !== 'admin') {
        return res.status(403).json({
            success : false,
            message : 'Access denied - admin users only'
        })
    }

    next()
}

module.exports = isAdminUser