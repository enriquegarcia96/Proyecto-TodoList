const Tarea = require('../models/tarea');


// ejemplo del controlador, PUEDES BORRARLO
const getTareas = async(req, res) => {
    try {
        const {titulo, descripcion} = req.body;
        const verTarea = await Tarea.find({});
    } catch (error) {
        
    }
}

// get de solo un usuario
const get_tarea = async(req, res) => {
    try {
        const {usuario} = req.body.usuario;
        const verTareas = await Tarea.find({userName: usuario});
        res.status(200).json(verTareas);
    } catch (error) {
        console.log('Error al consultar en Mongo' + error);
    }
}

//insertar una tarea
const insert_tarea = async(req, res) => {
    try{
        const tarea = new Tarea(req.body);
        carro.save();
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
    const cid= req.body.id;
    const tareaDB = await Tarea.findById(cid);
    if(!tareaDB){
        res.status(400).json({
            msg: 'No existe la tarea'
        });
    }

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