var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// test

//------------------------------------------------------------
// 增加引用模組
//------------------------------------------------------------
var session = require('express-session');

var man_login_form = require('./routes/man_login_form');
var man_login = require('./routes/man_login');
var man_logout = require('./routes/man_logout');
var index = require('./routes/index');
var index_success = require('./routes/index_success');
var man_add_form = require('./routes/man_add_form');
var man_add = require('./routes/man_add');
var member_query_form = require('./routes/member_query_form');
var member_query = require('./routes/member_query');
var bookshelf_query_form = require('./routes/bookshelf_query_form');
var bookshelf_query = require('./routes/bookshelf_query');
var journal_query_form = require('./routes/journal_query_form');
var journal_query = require('./routes/journal_query');
var member_remove_form = require('./routes/member_remove_form');
var member_remove = require('./routes/member_remove');
var bookshelf_remove_form = require('./routes/bookshelf_remove_form');
var bookshelf_remove = require('./routes/bookshelf_remove');
var journal_remove_form = require('./routes/journal_remove_form');
var journal_remove = require('./routes/journal_remove');
var material_add_form = require('./routes/material_add_form');
var material_add = require('./routes/material_add');
var material_query_form = require('./routes/material_query_form');
var material_query = require('./routes/material_query');
var material_remove_form = require('./routes/material_remove_form');
var material_remove= require('./routes/material_remove');
var manager_remove_form = require('./routes/manager_remove_form');
var manager_remove= require('./routes/manager_remove');
//------------------------------------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({secret: 'manger', cookie: { maxAge: 60000 }}));

app.use('/img', express.static('img'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

//-----------------------------------------
// 設定模組使用方式
//-----------------------------------------
app.use('/man/login/form', man_login_form);
app.use('/man/login', man_login);
app.use('/man/logout', man_logout);
app.use('/index', index);
app.use('/index/success', index_success);
app.use('/man/add/form', man_add_form);
app.use('/man/add', man_add);
app.use('/member/query/form', member_query_form);
app.use('/member/query', member_query);
app.use('/bookshelf/query/form', bookshelf_query_form);
app.use('/bookshelf/query', bookshelf_query);
app.use('/journal/query/form', journal_query_form);
app.use('/journal/query',journal_query);
app.use('/member/remove/form', member_remove_form);
app.use('/member/remove', member_remove);
app.use('/bookshelf/remove/form', bookshelf_remove_form);
app.use('/bookshelf/remove', bookshelf_remove);
app.use('/journal/remove/form', journal_remove_form);
app.use('/journal/remove', journal_remove);
app.use('/materialproduct/add/form', material_add_form);
app.use('/material/add', material_add);
app.use('/material/query/form', material_query_form);
app.use('/material/query',material_query);
app.use('/material/remove/form', material_remove_form);
app.use('/material/remove', material_remove);
app.use('/manager/remove/form', manager_remove_form);
app.use('/manager/remove', manager_remove);
//-----------------------------------------
//----------------------------------------
// 可由外部直接取用資料夾
//----------------------------------------
app.use(express.static('public/picture'));
//-----------------------------------------


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
