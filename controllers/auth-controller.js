//require in User model
const User = require('../models/User')

//require in bcrypt
const bcrypt = require('bcryptjs')

//require in jsonwebtoken
const jwt = require('jsonwebtoken')

//set up registerUser function
const registerUser = async (req, res) => {
    try {
        //receive the request body data
        const {name, email, password, role} = req.body

        //check if the user already exists in the database using the unique input
        const userExists = await User.findOne({email})

        if(userExists) {
            return res.status(400).json({
                success : false,
                message : 'User already exists - please log in instead!'
            })
        }

        //hash the user password
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        //create a new user and save
        const newUser = new User({
            name,
            email,
            password : hashedPassword,
            role : role || 'user'
        })

        await newUser.save()

        if(newUser) {
            res.status(201).json({
                success : true,
                message : 'New user registered successfully'
            })
        } else {
            res.status(400).json({
                success : false,
                message : 'Unable to register new user - please try again'
            })
        }

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }
}

//set up login user function
const loginUser = async (req, res) => {
    try {
        //receive the request body data
        const {email, password} = req.body

        //check this is a registered user in the database
        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({
                success : false,
                message : 'User does not exist - please register instead!'
            })
        }

        //check the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password)

        if(!passwordMatch) {
            return res.status(400).json({
                success : false,
                message : 'Invalid credentials'
            })
        }

        //create a bearer token to store credentials and expire in 15 minutes
        const accessToken = jwt.sign({
            userId : user._id,
            name : user.name,
            role : user.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn : '15m'
        })

        //pass the token in the response
        res.status(200).json({
            success : true,
            message : 'User logged in successfully',
            accessToken
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}