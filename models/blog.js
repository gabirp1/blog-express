const mongoose = require('mongoose')

const Coche = mongoose.model('Coche', {
    modelo:{
        title: modelo,
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    marca:{
        title: marca
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    cilindrada:{
        title: cilindrada
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    combustible:{
        title: combustible
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
   
})

module.exports = Coche
