const mongoose = require('mongoose');
const {Schema} = mongoose;


const usuarioSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String,  require: true },    
})


const modelo = mongoose.model('Usuario', usuarioSchema)
module.exports = modelo