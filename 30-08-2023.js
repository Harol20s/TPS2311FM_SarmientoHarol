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

const tiposDeSuscripciones = {
    free: 'solo puedes tomar cursos gratis',
    basic: 'puedes tomar casi todos los cursos gratis',
    expert: 'Puedes tomar casi todos los cursos por un año',
    expertduo: 'Puedes tomar TODOS los cursos',
};
tiposDeSuscripciones.free
'solo puedes tomar cursos gratis'
tiposDeSuscripciones['free']
'solo puedes tomar cursos gratis'
const ejemploSuscripcion = 'free'
undefined
tiposDeSuscripciones[ejemploSuscripcion]
'solo puedes tomar cursos gratis'

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
    console.log(tiposDeSuscripciones[suscripcion]);
    return;
}
console.warn('ese tipo de suscripcion no existe')
}
