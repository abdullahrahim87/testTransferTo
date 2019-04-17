const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');

const indexRouter = require('./routes/index');
const calcRouter = require('./routes/calc');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  app = express();

const uri = "mongodb+srv://root:Click123!@testtransferto-6cavc.mongodb.net/test?retryWrites=true";
mongoose.connect(
    uri
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/swagger-ui', express.static(path.join(__dirname, './node_modules/swagger-ui-dist')));
app.use('/swagger.json', function(req, res){
    res.json(require('./swagger.json'));
});
app.use('/swagger', function(req, res){
    res.redirect('swagger-ui?url=/swagger.json');
})

app.use('/', indexRouter);
app.use('/calc', calcRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
