const Tarea = require('../models/tarea');


// ejemplo del controlador, PUEDES BORRARLO
const getTarea = async(req, res) => {
    try {
        const {titulo, descripcion} = req.body;
        const verTarea = await Tarea.find({});
    } catch (error) {
        
    }
}



// Exportar 
module.exports = {
    getTarea
}