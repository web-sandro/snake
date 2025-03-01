const ProdutoModel = require('../models/produtoModel');

class ProdutoController {
  static async index(req, res) {
    try {
      const produtos = await ProdutoModel.findAll();

      return res.render('produtos/index', { produtos: produtos });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async show(req, res) {
    try {
      const id = req.params.id;
      const produto = await ProdutoModel.findById(id);

      if (!produto) {
        return res.status(404).render('404.ejs');
      }

      res.render('produtos/show', { produto: produto });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async createForm(req, res) {
    res.render('produtos/create');
  }

  static async create(req, res) {
    try {
      const { name, codigo, categoria, preco, quantidade, status } = req.body;

      const produto = new ProdutoModel({
        name,
        codigo,
        categoria,
        preco,
        quantidade,
        status
      });

      console.log(produto);

      const insertedProdutoId = await produto.create();

      res.redirect(`/produtos/exibir/${insertedProdutoId}`);
    } catch (error) {
      console.log(error);
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async editForm(req, res) {
    try {
      const id = req.params.id;
      const produto = await ProdutoModel.findById(id);

      if (!produto) {
        return res.status(404).render('404.ejs');
      }

      if (produto.birthDate) produto.birthDate = new Date(produto.birthDate).toISOString().split('T')[0];

      res.render('produtos/edit', { produto: produto });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async edit(req, res) {
    try {
      const id = req.params.id;
      const { name, codigo, categoria, preco, quantidade, status } = req.body;

      const produto = new ProdutoModel({
        id,
        name,
        codigo,
        categoria,
        preco,
        quantidade,
        status
      });

      const result = await produto.update();

      if (!result) {
        return res.status(404).render('404.ejs'); 
      }

      res.redirect(`/produtos/exibir/${id}`);
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async deleteForm(req, res) {
    try {
      const id = req.params.id;
      const produto = await ProdutoModel.findById(id);

      if (!produto) {
        return res.status(404).render('404.ejs');
      }

      res.render('produtos/delete', { produto: produto });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;

      const produto = new ProdutoModel({ id });

      const result = await produto.delete();

      if (!result) {
        return res.status(404).render('404.ejs'); 
      }

      res.redirect('/produtos');
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

}

module.exports = ProdutoController;