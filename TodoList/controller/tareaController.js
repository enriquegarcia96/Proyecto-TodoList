const Tarea = require('../models/tarea');
const Usuario = require('../models/usuario');


// ejemplo del controlador, PUEDES BORRARLO
const getTareas = async (req, res, next) => {
    try {
        const verTarea = await Tarea.find();
        res.status(200).json(verTarea);
    } catch (error) {
        console.log('Error al consultar en Mongo' + error);
    }
}

// get de solo un usuario
const get_tarea = async(req, res) => {
    try {
        const {usuario} = req.body.usuario;
        const verTareas = await Tarea.find({usuario: Usuario.userName});
        res.status(200).json(verTareas);
    } catch (error) {
        console.log('Error al consultar en Mongo' + error);
    }
}

//insertar una tarea
const insert_tarea = async(req, res) => {
    try{
        const tarea = new Tarea(req.body);
        tarea.save();
        res.status(200).json({resultado: 'Tarea agregada'});
    }
    catch(error){
        console.log('Error al insertar en Mongo' + error);
    }
}

const delete_tarea = async(req, res) => {
    try{
        const cid = req.query.idTarea;
    
        console.log("id de la tarea:" + cid);
        
        const tareaDB = await Tarea.findById(cid);
    
        if(!tareaDB){
            res.status(400).json({
                msg: 'No existe la tarea'
            });
        }
    
        await Tarea.findByIdAndDelete(cid);
        res.status(200).json({mensaje: 'Tarea Borrada'});
    }
    catch(error){
        console.log('Error al eliminar en Mongo' + error);
    }
}

const update_tarea = async(req, res) => {
    const cid= req.body.idTarea;
    const tareaDB = await Tarea.findById(cid);
    if(!tareaDB){
        res.status(400).json({
            msg: 'No existe la tarea'
        });
    }
    const datos = req.body;
    const tareaACtualizada = 
    await Tarea.findByIdAndUpdate(cid, datos, {new:true});
    res.status(200).json({tarea: tareaACtualizada});
}
// Exportar 
module.exports = {
    getTareas,
    get_tarea,
    insert_tarea,
    delete_tarea,
    update_tarea
 }