//require in User model
const User = require('../models/User')

//require in bcrypt
const bcrypt = require('bcryptjs')

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

module.exports = {
    registerUser,
    // loginUser
}