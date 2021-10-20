var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('man_login_form', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/', function(req, res, next) {
  res.render('man_login_form', { title: 'Express' });
});

router.get('/man_add_form', function(req, res, next) {
  res.render('man_add_form', { title: 'man_add_form' });
});

router.get('/man_login_form', function(req, res, next) {
  res.render('man_login_form', { title: 'man_login_form' });
});

router.get('/man_logout', function(req, res, next) {
  res.render('man_logout', { title: 'man_logout' });
});

router.get('/man_logoutFail', function(req, res, next) {
  res.render('man_logoutFail', { title: 'man_logoutFail' });
});


router.get('/addSuccess', function(req, res, next) {
  res.render('addSuccess', { title: 'addSuccess' });
});

router.get('/addFail', function(req, res, next) {
  res.render('addFail', { title: 'addFail' });
});

router.get('/member_query_form', function(req, res, next) {
  res.render('member_query_form', { title: 'member_query_form' });
});

router.get('/member_query', function(req, res, next) {
  res.render('member_query', { title: 'member_query' });
});


router.get('/bookshelf_query_form', function(req, res, next) {
  res.render('bookshelf_query_form', { title: 'bookshelf_query_form' });
});

router.get('/bookshelf_query', function(req, res, next) {
  res.render('bookshelf_query', { title: 'bookshelf_query' });
});

router.get('/journal_query_form', function(req, res, next) {
  res.render('journal_query_form', { title: 'journal_query_form' });
});

router.get('/journal_query', function(req, res, next) {
  res.render('journal_query', { title: 'journal_query' });
});

router.get('/member_remove_form', function(req, res, next) {
  res.render('member_remove_form', { title: 'member_remove_form' });
});

router.get('/removeFail', function(req, res, next) {
  res.render('removeFail', { title: 'removeFail' });
});

router.get('/removeSuccess', function(req, res, next) {
  res.render('removeSuccess', { title: 'removeSuccess' });
});


router.get('/bookshelf_remove_form', function(req, res, next) {
  res.render('bookshelf_remove_form', { title: 'bookshelf_remove_form' });
});


router.get('/journal_remove_form', function(req, res, next) {
  res.render('journal_remove_form', { title: 'journal_remove_form' });
});

router.get('/material_add_form', function(req, res, next) {
  res.render('material_add_form', { title: 'material_add_form' });
});

router.get('/material_remove_form', function(req, res, next) {
  res.render('material_remove_form', { title: 'material_remove_form' });
});

router.get('/addmaterialSuccess', function(req, res, next) {
  res.render('addmaterialSuccess', { title: 'addmaterialSuccess' });
});

router.get('/addmaterialFail', function(req, res, next) {
  res.render('addmaterialFail', { title: 'addmaterialFail' });
});

router.get('/material_query_form', function(req, res, next) {
  res.render('material_query_form', { title: 'material_query_form' });
});

router.get('/material_query', function(req, res, next) {
  res.render('material_query', { title: 'material_query' });
});

router.get('/material_remove_form', function(req, res, next) {
  res.render('material_remove_form', { title: 'material_remove_form' });
});
module.exports = router;


