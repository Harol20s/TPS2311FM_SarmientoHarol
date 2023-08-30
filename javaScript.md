## curso practico de javaScript

# Introducción

# Prueba de JavaScipt

 variables
    
 funciones
 condicionales
 ciclos
 arrays y objetos
 Bonus: reducción de condicionales
 ¡Es tuturno: crea un tutorial!

# Manipulación del DOM

 cómo conectar JavaScript con html
 Leyendo HTML desde JavaScript
 Escribiendo HTML desde JavaScript
 Eventos en JavaScript: interactuando con usuarios
 addEventListener

# contribución a proyectos

 conectando Github a proyectos de javascript
 Proyectos con JavaScript y Github desde cero
 Fork a proyectos en Github
 Analizando código de proyectos open-source
 Fusion del menú en desktop
 Fusión del menú en mobile
 carrito de compras
 lista de productos: HTML a partir de arrays
 Detalles de un producto
 Interacción entre todos los componentes
 Pull Requests; aportando código a proyectos en Github
 Feedback: conoce proyectos

# Despliegue

 Deploy con Github pages

const obj = {
    nombre: 'fulanito',
    edad: 3,
    comidasFavoritas: ['pollo frito', 'vegetales'],
};
Object.values(obj)

const estudiante = {
    nombre: 'fulanito',
    edad: 3,
    comidasFavoritas: ['pollo frito', 'vegetales'],
};

function imprimirElementoPorElemento(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i])
}

function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion == 'free' || suscripcion == 'FREE'){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }

    if (suscripcion =='Expert'){
        console.log("Puedes tomar casi todos los cursos");
        return;    
    }

 if (suscripcion =='ExpertDuo'){
        console.log("Puedes tomar TODOS los cursos");
        return;
    }

    console.warn('ese tipo de suscripcion no existe')
}

function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion == 'free'){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }

    if (suscripcion =='Expert'){
        console.log("Puedes tomar casi todos los cursos");
        return;    
    }

 if (suscripcion =='ExpertDuo'){
        console.log("Puedes tomar TODOS los cursos");
        return;
    }

    console.warn('ese tipo de suscripcion no existe')
}

function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion == 'free'){
        console.log("Solo puedes tomar los cursos gratis");
    }

    if (suscripcion =='Expert'){
        console.log("Puedes tomar casi todos los cursos");
          
    }

 if (suscripcion =='ExpertDuo'){
        console.log("Puedes tomar TODOS los cursos");
    }

    console.warn('ese tipo de suscripcion no existe')
}
operador logico OR (||)

const tiposDeSuscripciones = {
    free: 'solo puedes tomar cursos gratis',
    basic: 'puedes tomar casi todos los cursos gratis',
    expert: 'Puedes tomar casi todos los cursos por un año',
    expertduo: 'Puedes tomar TODOS los cursos',
};
