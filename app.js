var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRoutes');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);



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


// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Página inicial');
});

// Middleware para tratar erros
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    // Renderiza a página de erro, passando 'mensagem' e 'error'
    res.render('error', {
        mensagem: 'Ocorreu um erro inesperado.',  // Mensagem de erro personalizada
        error: err                            // O objeto de erro
    });
});



module.exports = app;