const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.index);

router.get('/exibir/:id', produtoController.show);

router.get('/cadastrar/', produtoController.createForm);
router.post('/cadastrar/', produtoController.create);

router.get('/atualizar/:id', produtoController.editForm);
router.post('/atualizar/:id', produtoController.edit);

router.get('/deletar/:id', produtoController.deleteForm);
router.post('/deletar/:id', produtoController.delete);

module.exports = router;