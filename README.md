# TPS2311FM_SarmientoHarol
Desarrollo de proyecto de grado para TPS 2023

# Curso de Fundamentos de Bases de Datos

## Bienvenida conceptos básicos y contexto histórico de las Bases de Datos
### Bienvenida conceptos básicos y contexto histórico de las Bases de Datos
### Playground: tu primera consulta en bases de datos

## Introducción a las bases de datos relacionales
### Historia de las bases de datos relacionales
### Qué son entidades y atributos
### Entidades de Platzi Blog
### Relaciones
### Múltiples muchos
### Diagrama ER
### Diagrama Físico: tipos de datos y constraints
### Diagrama Físico: normalización
### Formas normales en Bases de Datos relacionales 
### Diagrama Físico: normalizando Platziblog

## RDBMS (MySQL) o cómo hacer lo anterior de manera práctica
### Instalación local de un RDBMS (Windows)
### ¿Qué es RDB y RDBMS?
### Instalación local de un RDBMS (Mac)
### Instalación local de un RDBMS (Ubuntu)
### Clientes gráficos
### Servicios administrados

## SQL hasta en la sopa

### Historia de SQL
     structured query lanuguage es un lenguaje utilizado para crear base de datos/ DB relacionales  
     nosql tiene de base sql
### DDL create
    data definition language 
    create, database table view
    create database test_db;
    use datadabe test_db;CREATE TABLE people(
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


### Playground: CREATE TABLE
### CREATE VIEW y DDL ALTER
### DDL drop
### Playground: VIEW, ALTER y DROP en SQL
### DML
### Playground: CRUD con SQL
### ¿Qué tan standard es SQL?
### Creando Platziblog: tablas independientes
### Creando Platziblog: tablas dependientes
### Creando Platziblog: tablas transitivas

## Consultas a una base de datos

### ¿Por qué las consultas son tan importantes?
### Estructura básica de un Query
### SELECT
### Playground: SELECT en SQL
### FROM y SQL JOINs
### Utilizando la sentencia FROM
### Playground: FROM y LEFT JOIN en SQL
### WHERE
### Utilizando la sentencia WHERE nulo y no nulo
### Playground: Filtrando Datos con WHERE
### GROUP BY
### ORDER BY y HAVING
### Playground: Agrupamiento y Ordenamiento de Datos
### El interminable agujero de conejo (Nested queries)
### ¿Cómo convertir una pregunta en un query SQL?
### Preguntándole a la base de datos
### Consultando PlatziBlog
### Playground: Prueba Final con PlatziBlog

## Introducción a la bases de datos NO relacionales
### ¿Qué son y cuáles son los tipos de bases de datos no relacionales?
### Servicios administrados y jerarquía de datos

## Manejo de modelos de datos en bases de datos no relacionales
### Top level collection con Firebase
### Creando y borrando documentos en Firestore
### Colecciones vs subcolecciones
### Recreando Platziblog
### Construyendo Platziblog en Firestore
### Proyecto final: transformando tu proyecto en una db no relacional

## Bases de datos en la vida real
### Bases de datos en la vida real
### Big Data
### Data warehouse
### Data mining
### ETL
### Business intelligence
### Machine Learning
### Data Science
### ¿Por qué aprender bases de datos hoy?

## Bonus
### Bases de datos relacionales vs no relacionales
### Elegir una base de datos