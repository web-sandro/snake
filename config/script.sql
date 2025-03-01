# deletar o banco de dados - caso já exista algum com o mesmo nome.
DROP DATABASE IF EXISTS EmpresaBD;

# criar um novo banco de dados.
CREATE DATABASE EmpresaBD;

# exibir os bancos de dados existentes com o objetivo de confirmar que ele foi criado com sucesso.
SHOW DATABASES;

# selecionar o banco de dados - comandos a partir de agora fazem efeito sobre ele.
USE EmpresaBD;

# criar uma estrutura para armazenar dados de funcionários.
CREATE TABLE Funcionario (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    funcao VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT 1,
    dataCadastro DATETIME NOT NULL DEFAULT NOW(),
    dataAtualizacao DATETIME NOT NULL DEFAULT NOW()
);

# exibir as tabelas existentes com o objetivo de confirmar que a tabela foi criada com sucesso.
SHOW TABLES;

# exibir os campos, tipos de dados e restrições da tabela.
DESCRIBED Funcionario;
DESC Funcionario;

# também é possível exibir as informações de um único campo em específico.
DESC Funcionario id;

# cadastra alguns funcionários para teste.
INSERT INTO Funcionario (nome, sobrenome, email, telefone, funcao, salario) 
VALUES ('João', 'Silva', 'joao.silva@email.com', '(11) 91234-5678', 'Analista de Sistemas', 5000.00);

INSERT INTO Funcionario (nome, sobrenome, email, telefone, funcao, salario) 
VALUES ('Maria', 'Santos', 'maria.santos@email.com', '(21) 98888-7777', 'Gerente de Projetos', 8000.00);

INSERT INTO Funcionario (nome, sobrenome, email, telefone, funcao, salario, estado) 
VALUES ('Pedro', 'Ribeiro', 'pedro.ribeiro@email.com', '(31) 98765-4321', 'Desenvolvedor Web', 4000.00, 0);

INSERT INTO Funcionario (nome, sobrenome, email, telefone, funcao, salario) 
VALUES ('Juliana', 'Ferreira', 'juliana.ferreira@email.com', '(51) 95555-4444', 'Analista de Negócios', 6000.00);

# exibir os funcionários já cadastrados
SELECT * FROM Funcionario \G

# exibição no formato de tabela.
SELECT * FROM Funcionario;