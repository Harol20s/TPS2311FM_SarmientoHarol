CREATE SCHEMA `platziblog` DEFAULT CHARACTER SET utf8mb4;
USE`platziblog`; 

CREATE TABLE `platziblog`.`post` (
`id` INT NOT NULL AUTO_INCREMENT,
`titulo` VARCHAR(100),
`fecha_publicacion` DATETIME,
`contenido` VARCHAR(3000),
`status` VARCHAR(8),
`contenido_id` INT,
`categorias_id` INT,
PRIMARY KEY(´id´));




