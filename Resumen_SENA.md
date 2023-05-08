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
