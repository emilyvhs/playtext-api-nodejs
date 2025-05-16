const Play = require('../models/Play')

const getAllPlays = async (req, res) => {
    try {
        const allPlays = await Play.find({})

        if(allPlays?.length > 0) {
            return res.status(200).json({
                success : true,
                message : 'All plays retrieved successfully',
                data : allPlays
            })
        }

        res.status(404).json({
            success : false,
            message : 'No plays found'
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }

}

const getSinglePlay = async (req, res) => {
    try {
        const getPlayId = req.params.id
        const singlePlay = await Play.findById(getPlayId)

        if(!singlePlay) {
            return res.status(404).json({
                success : false,
                message : 'Play not found!'
            })
        }

        res.status(200).json({
            success : true,
            message : 'Play retrieved successfully',
            data : singlePlay
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }
    
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
    try {
        const getPlayId = req.params.id
        const updatedPlayData = req.body

        if(!updatedPlayData) {
            return res.status(400).json({
                success : false,
                message : 'No data sent - nothing to update!'
            })
        }

        const updatedPlay = await Play.findByIdAndUpdate(getPlayId, updatedPlayData, {new:true})

        if(!updatedPlay) {
            return res.status(404).json({
                success : false,
                message : 'Play not found!'
            })
        }

        res.status(200).json({
            success : true,
            message : 'Play updated successfully',
            data : updatedPlay
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }
}

const deletePlay = async (req, res) => {
    try {
        const getPlayId = req.params.id
        const deletedPlay = await Play.findByIdAndDelete(getPlayId)

        if(!deletedPlay) {
            return res.status(404).json({
                success : false,
                message : 'Play not found!'
            })
        }

        res.status(200).json({
            success : true,
            message : 'Play deleted',
            data : deletedPlay
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
    getAllPlays,
    getSinglePlay,
    addNewPlay,
    updatePlay,
    deletePlay
}