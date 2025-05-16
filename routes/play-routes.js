const express = require('express')

const {
    getAllPlays,
    getSinglePlay,
    addNewPlay,
    updatePlay,
    deletePlay
} = require('../controllers/play-controller')

const router = express.Router()

router.get('/', getAllPlays)
router.get('/:id', getSinglePlay)
router.post('/add', addNewPlay)
router.put('/update/:id', updatePlay)
router.delete('/delete/:id', deletePlay)

module.exports = router