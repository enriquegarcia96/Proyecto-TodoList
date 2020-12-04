const mongoose = require('mongoose');
const {Schema} = mongoose;


const usuarioSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String,  require: true }, 
    //estadoUsuario: {type: Boolean, required: true}   
})


const modelo = mongoose.model('Usuario', usuarioSchema)
module.exports = modelo