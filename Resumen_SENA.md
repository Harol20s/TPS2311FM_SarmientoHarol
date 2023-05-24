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

CREATE TABLE `platziblog`.`people` (
  `person_id` INT NOT NULL AUTO_INCREMENT,
  `last_name` VARCHAR(255) NULL,
  `first_name` VARCHAR(255) NULL,
  `address` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  PRIMARY KEY (`person_id`));

` ' ´
CREATE TABLE `platziblog`.`prueba` (
  `test_id` INT NOT NULL AUTO_INCREMENT,
  `last_name` VARCHAR(255) NULL,
  `first_name` VARCHAR(255) NULL,
  PRIMARY KEY (`person_id`));

CREATE TABLE `platziblog`.`prueba`(
`person_id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
PRIMARY KEY (`person_id`)
);


