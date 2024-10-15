const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todotitle:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = new mongoose.model('todos',todoSchema)