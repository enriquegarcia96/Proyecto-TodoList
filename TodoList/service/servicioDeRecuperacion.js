// paquete para enviar correos 
const nodemailer = require('nodemailer')
require('dotenv').config()

// paquete para generar tokes
const jwt = require('jsonwebtoken')

const expiraElToken = 4 * 10

const ModeloUsuario = require('../models/usuario')



//* transporte para enviar correo de recuperacion
const envioDelToken = async (req, res) =>{
    try {
        const {email} = req.body

        // busco el usuario que tenga correo en la base de datos
        const correoExisteEnDB = await ModeloUsuario.findOne({email})
        if (correoExisteEnDB) {
            
            // 1) en otro ruta que meta el token que se envio al correo 
            // 2) se le envia a otro formulario para que actualice la contraseña

            // traigo el token del objeto correoExisteEnDB
            let tokenBaseDeDatos = correoExisteEnDB.token
            
            let transporte = nodemailer.createTransport({
                service: 'gmail',
                auth:{
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })
        
            let opcionesEmail = {
                from: "santbanegas52@gmail.com",
                to: email,
                subject: "enviado desde nodemailer",
                text: `Su token para que pueda actualizar su contraseña: ${tokenBaseDeDatos}`
            }       
            transporte.sendMail(opcionesEmail, (error, info)=>{
                if (error) {
                    console.log('Error al intentar enviar el correo', error)
                    res.status(500).send(error.message)
                 }else{
                    console.log('¡Correo enviado con exito!')
                    res.status(200).send({status: 'Correo enviado con exito'})
                 }
            })
        }else{
            res.status(403).send({status: 'correo no existe'})
        }
    } catch (error) {
        res.status(500).send({status: '¡ERROR!', message: error.message})
    }
}


// compara si el token es el mismo de la base de datos de mongodb
const comparaElToken =  async (req, res) =>{
    
    try {
        let token  = req.body.token
        
        const existeElToken = await ModeloUsuario.findOne({ token })
        
        if (existeElToken.token === token) {

            let generoUnNuevoToken = jwt.sign({userId: existeElToken._id}, process.env.JWT_SECRET)

            //* le actualizo el token al usuario y se lo guardo en la base
            await ModeloUsuario.findByIdAndUpdate(existeElToken._id, {token:generoUnNuevoToken},{new: true})
            
            res.send({status: 'token actualizado', message: generoUnNuevoToken})
        }else{
            console.log('no existe el token')
        }
    } catch (error) {
        res.status(500).send({status: '¡ERROR!', message: error.message})
    }


}

module.exports = {
    envioDelToken,
    comparaElToken
}