const Play = require('../models/Play')

const getAllPlays = async (req, res) => {

}

const getSinglePlay = async (req, res) => {
    
}

const addNewPlay = async (req, res) => {
    try {
        const newPlayData = req.body
        const newlyCreatedPlay = await Play.create(newPlayData)

        if(newlyCreatedPlay) {
            res.status(201).json({
                success : true,
                message : 'New play added successfully',
                data : newlyCreatedPlay
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

const updatePlay = async (req, res) => {
    
}

const deletePlay = async (req, res) => {
    
}

module.exports = {
    getAllPlays,
    getSinglePlay,
    addNewPlay,
    updatePlay,
    deletePlay
}