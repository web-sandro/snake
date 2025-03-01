const pool = require('../config/dbConfig');

class ProdutoModel {
    constructor({
        id,
        name,
        codigo,
        categoria,
        preco,
        quantidade,
        status,
        createdAt = new Date(),
        updatedAt,
    }) {
        this.id = id;
        this.name = name;
        this.codigo = codigo;
        this.categoria = categoria;
        this.preco = preco;
        this.quantidade = quantidade;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async create() {
        try {

            const sql = 'INSERT INTO produto (name, codigo, categoria, preco, quantidade, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [this.name, this.codigo, this.categoria, this.preco, this.quantidade, this.status, this.createdAt, this.updatedAt];
            const [rows, fields] = await pool.query(sql, values);

            
            return rows.insertId;
        } catch (error) {
            console.error(error);
            throw new Error(`Ocorreu um erro ao cadastrar o usuário.`);
        }
    }

    async update() {
        try {
            const updatedAt = new Date();
            
            const sql = 'UPDATE produto SET name = ?, codigo= ?, categoria = ?, preco = ?, quantidade = ?, status = ?, createdAt = ?, updatedAt = ? WHERE id = ?';
            const values = [this.name, this.codigo, this.categoria, this.preco, this.quantidade, this.status, this.createdAt, updatedAt, this.id];
            const [rows, fields] = await pool.query(sql, values);

            return rows.affectedRows > 0;
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao atualizar o usuário.');
        }
    }

    async delete() {
        try {
            const sql = 'DELETE FROM produto WHERE id = ?';
            const [rows, fields] = await pool.query(sql, [this.id]);

            return rows.affectedRows > 0;
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao excluir o produto.');
        }
    }

    static async findById(id) {
        try {
            const sql = 'SELECT * FROM produto WHERE id = ?';
            const [rows, fields] = await pool.query(sql, [id]);

            if (rows.length === 0) {
                return null;
            }

            const produtoData = rows[0];
            const produto = new ProdutoModel(produtoData);
            return produto;
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao buscar o produto por ID.');
        }
    }

    static async findAll() {
        try {
            const sql = 'SELECT * FROM produto';
            const [rows, fields] = await pool.query(sql);

            const produtos = rows.map(produtoData => {
                const produto = new ProdutoModel(produtoData);
                return produto;
            });

            return produtos;
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao buscar todos os produtos.');
        }
    }

    static async findByProdutoNomeOrCodigo(nomeOrCodigo) {
        try {
            const sql = 'SELECT * FROM produto WHERE nome = ? OR codigo = ?';
            const [rows, fields] = await pool.query(sql, [nomeOrCodigo, nomeOrCodigo]);

            if (rows.length === 0) {
                return null;
            }

            const produtoData = rows[0];
            const produto = new ProdutoModel(produtoData);

            return produto;
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao buscar o usuário por nome ou codigo.');
        }
    }

}

module.exports = ProdutoModel;