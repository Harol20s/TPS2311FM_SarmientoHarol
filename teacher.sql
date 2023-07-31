CREATE SCHEMA `platziblog` DEFAULT CHARACTER SET utf8 ;
USE `platziblog`;
CREATE TABLE `platziblog`.`courses` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `n_reviews` varchar(200) NULL,
  `teacher_id` INT NULL,
  PRIMARY KEY (`id`));
  INSERT INTO `platziblog`.`courses` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES (100,'Fundamentos de SQL y Bases de Datod','1400','1');
  INSERT INTO `platziblog`.`courses` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES (200,'Curso de MySQL y MariaDB','400','25');
  INSERT INTO `platziblog`.`courses` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('260','Curso de Data Science','320','8');
  INSERT INTO `platziblog`.`courses` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('350','Curso de Firebase','150','1');
  INSERT INTO `platziblog`.`courses` (`id`,`name`,`n_reviews`,`teacher_id` ) VALUES ('749','Curso de Python','2300','8');
INSERT INTO `platziblog`.`courses` (`id`,`name`,`n_reviews`,`teacher_id`) VALUES ('750','Curso de React.js','1500','16');

CREATE TABLE `platziblog`.`teacher` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
	INSERT INTO `platziblog`.`teacher` (`id`,`name`) VALUES (1,'ISRAEL');
  INSERT INTO `platziblog`.`teacher` (`id`,`name`) VALUES (8,'silvia');
  INSERT INTO `platziblog`.`teacher` (`id`,`name`) VALUES ('16','Leomaris');
  INSERT INTO `platziblog`.`teacher` (`id`,`name`) VALUES ('25','juan');
  
  SELECT teacher_id, COUNT(teacher_id) cursos_profe
FROM courses
GROUP BY teacher_id;

  SELECT teacher_id, COUNT(teacher_id) cursos_profe, SUM(n_reviews) cantidad
FROM courses
GROUP BY teacher_id;
