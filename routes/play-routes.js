//require in express
const express = require('express')

//require in middleware
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')

//require in all play functions from controller
const {
    getAllPlays,
    getSinglePlay,
    addNewPlay,
    updatePlay,
    deletePlay
} = require('../controllers/play-controller')

//set up router
const router = express.Router()

//get all plays route - log in required
router.get('/', 
    authMiddleware, 
    getAllPlays)

//get single play route - log in required
router.get('/:id', 
    authMiddleware, 
    getSinglePlay)

//add new play route - log in + admin authorisation required
router.post('/add', 
    authMiddleware, 
    adminMiddleware, 
    addNewPlay)

//update play route - log in + admin authorisation required
router.put('/update/:id', 
    authMiddleware, 
    adminMiddleware, 
    updatePlay)

//delete play route - log in + admin authorisation required
router.delete('/delete/:id', 
    authMiddleware, 
    adminMiddleware, 
    deletePlay)

module.exports = router