var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');


var cors = require('cors')


// importo los paquetes 
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// habilito la lectura de variables de entorno
dotenv.config()

// importo las rustas 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/TodoList/', usersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


/***
 * * CORS
 */
 app.use(cors())
 app.options('*', cors())


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



const PORT = process.env.PORT || 5000

// mi string de conexion
mongoose.connect(process.env.MONGO,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=>{
  console.log('Conectado con Mongo DB')

  app.listen(PORT,() =>{
    console.log(`Corriendo en puerto => ${PORT}`)
  })
}).catch((error) =>{
  console.log('error de Mongo DB', error)
})

module.exports = app;
