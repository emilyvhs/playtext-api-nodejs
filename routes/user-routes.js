//require in express
const express = require ('express')

//require in auth controller and functions
const {
    registerUser,
    loginUser
} = require('../controllers/auth-controller')

//set up router
const router = express.Router()

//route to register
router.post('/register', registerUser)

//login
router.post('/login', loginUser)

//export
module.exports = router