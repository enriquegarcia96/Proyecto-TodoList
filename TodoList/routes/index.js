//* importo la tarea y usuario de controller
const tareaRoutes = require('../controller/tareaController')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// ejemplo de ruteo, puedes borrarlo
router.get('/user', tareaRoutes.getTarea)

module.exports = router;
