// DOC -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
// DOC -> https://developer.mozilla.org/es/docs/Glossary/Hoisting


// Declaracion de Funcion 
function saludar(){
    console.log('Hola')
}

/* saludar() */


// Expresión de Función

/* let saludarDos = function(){
    console.log('Hola desde saludar dos')
}
saludarDos()  */


// Parametros de Funcion

let agustin = 'Agustin'

function saludarAlumno( alumno='' ){
    console.log( `Hola ${alumno}` )
}


/* saludarAlumno( agustin )
saludarAlumno( 'Elias' )
saludarAlumno( 'Alexis' )
saludarAlumno(  ) */



// Return y Alcance de las variables de una funcion

function pasarAMinusculas( palabra1, palabra2, palabra3 ){
    let minusculas = `${palabra1} ${palabra2} ${palabra3}`.toLowerCase()
    return minusculas
}
/* console.log( pasarAMinusculas( 'NICOLAS', 'CATRIEL', 'CIRULLI')  ) */


// scope, global, local, bloque
var apellido = 'Cirulli' /* variable global, crea propiedad en objeto window */

function scopeLocal(){
    if( true ){
      var apellido = 'Cirulli' 
      /* Al usar var dentro de una funcion, creo una
       variable local */
    }
    if( true ){
        let nombre = 'Nicolas'
        const segundoNombre = 'Catriel'
    }
    /*  console.log(nombre) 
        console.log(segundoNombre)
        no puedo acceder a nombre o segundoNombre, 
        porque es una variable de bloque y esta declarada en otro bloque 
    */
/*     console.log(apellido) */
    /*
        Puedo acceder al valor de apellido 
        porque como se creo con var, tiene un scope local
    */
}

scopeLocal()

/* 
    Las funciones si tienen que arreglar con lo que llega por parametro
    no van a buscar ni modifican nada afuera
*/
function restar(num1, num2=0){
    return num1 - num2
}
let resultado = restar( 12 - 5 )
let resultadoDos = restar( 50-20 )



/* 
        valores falsy
    undefined, null, 0, "", NaN, false
    Boolean('') <- esto da false 
*/


/*
    1- Escriba un programa que le pregunte al usuario una temperatura 
    en grados Celsius y determine si hace mucho calor o no 

*/


function programa1(){
    let temp = Number(  prompt( 'Ingrese la temp en grados' )  )
    let mensaje
    if( temp || temp == 0 ){
        mensaje = haceCalor( temp )
    }else{
        mensaje = 'Ingreso una temperatura invalida'
    }
    console.log( mensaje )
}

function haceCalor( temperatura ){
    let condicion = temperatura > 28
    if( condicion ) {
        return 'Hace mucho calor'
    }
    return 'No hace tanto calor'
    
}

programa1()

