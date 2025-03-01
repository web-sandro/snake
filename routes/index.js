
var express = require('express');
const pool = require('../config/dbConfig');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.session)

  const { user } = req.session;
  res.render('index', { user });
});

//pagina pratica
router.get('/pratica', async function (req, res, next) {
  // mensagens tem que vir do banco
  const sql = 'select * from message where user_id';
  const [rows] = await pool.query(sql);
  console.log(rows)
  res.render('users/pratica', { mensagens: rows, user_id: 1 });
});
//pagina pratico
router.post('/pratica', async function (req, res, next) {
  try {
    const sql = "insert into message (content,user_id) values (?, ?)";
    const values = [req.body.mensagem, req.body.user_id];
    const [rows] = await pool.query(sql, values);
    res.redirect('/pratica');

  } catch (error) {
    console.error(error);
    res.send('Ocorreu um erro ao enviar a mensagem.');
  }
});

module.exports = router;
