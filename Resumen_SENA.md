# Iniciando repositorio

## GIT

Iniciamos GIT en la carpeta donde esta el proyecto

    git init

Clonamos el repositorio de github o bitbucket

    git clone <url>

Añadimos todos los archivos para el commit

    git add .

Hacemos el primer commit

    git commit -m "Texto que identifique por que se hizo el commit"

subimos al repositorio

    git push origin master

## GIT ADD

Añadimos todos los archivos para el commit

    git add .

Añadimos el archivo para el commit

    git add <archivo>

Añadimos todos los archivos para el commit omitiendo los nuevos

    git add --all 

Añadimos todos los archivos con la extensión especificada

    git add *.txt

Añadimos todos los archivos dentro de un directorio y de una extensión especifica

    git add docs/*.txt

Añadimos todos los archivos dentro de un directorios

    git add docs/

## GIT COMMIT

Cargar en el HEAD los cambios realizados

    git commit -m "Texto que identifique por que se hizo el commit"

Agregar y Cargar en el HEAD los cambios realizados

    git commit -a -m "Texto que identifique por que se hizo el commit"

De haber conflictos los muestra

    git commit -a 

Agregar al ultimo commit, este no se muestra como un nuevo commit en los logs. Se puede especificar un nuevo mensaje

    git commit --amend -m "Texto que identifique por que se hizo el commit"

## GIT PUSH

Subimos al repositorio

    git push <origien> <branch>

Subimos un tag

    git push --tags
# arreglar mysql
    buscar en administrador de tareas mysql en detenido dar click derecho iniciar 


## OTROS COMANDOS

Busca los cambios nuevos y actualiza el repositorio

    git pull origin <nameBranch>

tipos
    relacionales_no relacionales  
Servicios
    auto administrados y administrados
    fiel a la información y almacenamiento(perdurar en el tiempo)
Principales objetos
    entidad relacionada a un objeto (rectangulos)
    atributos puntuales es lo que lo define (ovalo)
        atribito multivaludo (doble ovalo)
        atributos compuestos
        atributo llave
entidad debil
    derivada de las fuerte
Métodos
clase_entidad no definida
Propiedades de POO
    polimorfismo
    herencia
    encapsulamiento
    abstracción
relación(rombo)
poner clave foranea donde se relaciona ID
     eliminar relación m/m tabla pivote(poner ambos id)
     DDL(data definition languaje)
    create_DB
    schema=DB
    USE DATABASE text_db;
    USE DATABASE test_db;

    CREATE TABLE people(
    person_id int,
    last_name varchar(255),
    first_name varchar (255)
    address varchar (255)
    city varchar (255)
    );
tilde invertida(alt+96)(`)

CREATE SCHEMA `platziblog` DEFAULT CHARACTER SET utf8 ;
USE `platziblog` ;
CREATE TABLE `platziblog`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NULL,
  `fecha_publicacion` TIMESTAMP NULL,
  `contenido` VARCHAR(3000) NULL,
  `estatus` VARCHAR(500) ,
   `usuario_id` INT NULL,
   `categoria_id` INT NULL,
  PRIMARY KEY (`id`));

DDL (DATA DEFINITION LANGUAJE)
    Comando	Descripción
CREATE	Utilizado para crear nuevas tablas, campos e índices
DROP	Empleado para eliminar tablas e índices
ALTER	Utilizado para modificar las tablas agregando campos o cambiando la definición de los campos.

DML (DATA MANIPULATION LANGUAJE)
    DELETE	Elimina filas de una tabla. Consulte DELETE.    
INSERT	Añade nuevas filas a una tabla. Consulte INSERT.
SELECT	Recupera filas de una tabla o fila. Consulte SELECT (para recuperar filas).
TRUNCATE	Vacía una tabla. Consulte TRUNCATE.
UPDATE	Sustituye valores de columnas en una tabla. Consulte UPDATE.

DCL (DATA CONTROL LANGUAJE)
    USAGE: para usar un objeto específico de la base de datos.
SELECT: para acceder a tablas o vistas.
INSERT [ (nombre_columna) ]: Si se especifica el nombre_columna, se otorga permiso para insertar en la columna especificada. Si se omite entonces se permite insertar valores en todas las columnas.
UPDATE [ (nombre_columna) ]: Lo mismo que INSERT para modificar.
DELETE: para eliminar registros de una tabla o vista.
REFERENCES [ (nombre_columna) ]: Si se especifica nombre_columna permite referirse a la columna indicada como vínculo de integridad, si se omite se aplica a todas las comunas y también a las que se añadan después.
GRANT OPTION: permite dar permisos a otro usuario.
ALL: otorga todos los permisos menos GRANT OPTION.

 ### Estructura básica de un Query
  SELECT city,count(*) AS total
  FROM people
  WHERE active = true
  GROUP BY city
  ORDER BY total DESC
  HAVING total >= 2;

SELECT *
FROM categorias
WHERE fecha_publicacion <'2024-01-01';

SELECT titulo AS encabezado, fecha_publicacion AS publicado_en, estatus AS estado
FROM categorias;

-  SELECT *
FROM usuarios
LEFT JOIN posts ON usuarios.id = posts.usuario_id
WHERE posts.usuarios_id IS NULL;

SELECT *
FROM usuarios
RIGHT JOIN posts ON usuarios.id = posts.usuario_id


SELECT *
FROM usuarios
INNER JOIN posts ON usuarios.id = posts.usuario_id;

SELECT *
FROM usuarios
LEFT JOIN posts ON usuarios.id = posts.usuario_id
UNION
SELECT *
FROM usuarios
RIGHT JOIN posts ON usuarios.id = posts.usuario_id;

SELECT *
FROM usuarios
FULL OUTER JOIN posts ON usuarios.id = posts.usuario_id;

SELECT *
FROM usuarios
LEFT JOIN posts ON usuarios.id = posts.usuario_id
WHERE posts.usuario_id IS NULL
UNION

SELECT *
FROM usuarios
RIGHT JOIN posts ON usuarios.id = posts.usuario_id
WHERE posts.usuario_id IS NULL;

SELECT estatus, COUNT(*) post_quantity
FROM posts
GROUP BY estatus;
