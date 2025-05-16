const mongoose = require('mongoose')

const PlaySchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Play title is required'],
        trim : true,
        maxLength : [255, 'Play title cannot be longer than 255 characters']        
    },
    playwright : {
        type : String,
        required : [true, 'Playwright name is required'],
        trim : true
    },
    year : {
        type : Number,
        required : [true, 'Publication year is required'],
        min : [1000, 'Publication year cannot be before 1000'],
        max : [new Date().getFullYear(), 'Publication year cannot be in the future']
    },
    synopsis : {
        type : String,
        min : [100, 'Synopsis cannot be shorter than 100 characters']
    },
    castSize : {
        type : Number,
        min : [1, 'Cast size cannot be smaller than 1']
    },
    publisher : {
        type : String,
        default: 'Unknown'      
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Play', PlaySchema)