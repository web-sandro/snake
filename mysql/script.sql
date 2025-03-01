DROP DATABASE IF EXISTS `userdb`;
CREATE DATABASE IF NOT EXISTS `userdb`;

USE `userdb`;


CREATE TABLE user (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
   	`name` VARCHAR(50) NOT NULL,
	`username` VARCHAR(255) NOT NULL UNIQUE,
	`birthDate` DATE,
	`password` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`sex` ENUM('Masculino', 'Feminino', 'Outro', 'Prefiro não responder'),	
	`status` ENUM('Ativado', 'Desativado', 'Bloqueado'),
	`createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
   	`updatedAt` DATETIME
);

CREATE TABLE produto (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    codigo VARCHAR(100) UNIQUE NOT NULL,
    categoria VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT UNSIGNED NOT NULL,
    status ENUM('ativo', 'inativo') NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NULL ON UPDATE CURRENT_TIMESTAMP
);


SELECT * FROM `user`;