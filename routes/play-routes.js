//require in express
const express = require('express')

//require in auth middleware
const authMiddleware = require('../middleware/auth-middleware')

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
router.get('/all', authMiddleware, getAllPlays)
router.get('/:id', getSinglePlay)

router.post('/add', addNewPlay)
router.put('/update/:id', updatePlay)
router.delete('/delete/:id', deletePlay)

module.exports = router