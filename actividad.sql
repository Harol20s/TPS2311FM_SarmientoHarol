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
  
 SELECT *
FROM courses;

SELECT *
FROM teacher;

SELECT teacher.name AS teacher_name,
       courses.name AS course_name,
       courses.n_reviews AS course_reviews
FROM curses
JOIN teacher ON curses.teacher_id = teacher.id
ORDER BY teacher.name ASC, courses.n_reviews DESC;

SELECT teacher.id AS teacher_id,
       teacher.name AS teacher_name,
       SUM(courses.n_reviews) AS total_reviews
FROM teacher
LEFT JOIN courses ON teacher.id = courses.teacher_id
GROUP BY teacher.id, teacher.name;

SELECT teacher.name AS teacher,
       SUM(courses.n_reviews) AS total_reviews
FROM teacher
LEFT JOIN courses ON teacher.id = courses.teacher_id
GROUP BY teacher.name;

SELECT teacher.name AS teacher,
       SUM(courses.n_reviews) AS total_reviews
FROM teacher
LEFT JOIN courses ON teacher.id = courses.teacher_id
GROUP BY teacher.name
ORDER BY total_reviews DESC;


CREATE TABLE `platziblog`.`comentarios` (
  `id` INT AUTO_INCREMENT,
  `cuerpo_comentario` VARCHAR(255) NULL,
  `usuario_id` INT NULL,
  `post_id` INT NULL,
  PRIMARY KEY (`id`));
  
  INSERT INTO `platziblog`.`comentarios` (`id`,`cuerpo_comentario`,`usuario_id`,`post_id`) VALUES (1,'mariana no pago datos','1','2');
  INSERT INTO `platziblog`.`comentarios` (`id`,`cuerpo_comentario`,`usuario_id`,`post_id`) VALUES (2,'duay no sirve para programacion','1','3');
  INSERT INTO `platziblog`.`comentarios` (`id`,`cuerpo_comentario`,`usuario_id`,`post_id`) VALUES (3,'el profesor es muy claro con sus explicaciones','2','4');
  
   SELECT *
FROM comentarios;

SELECT usuario_id
FROM comentarios
JOIN `post_id`;

