/**
 * En TypeScript, la sintaxis de JavaScript es vompletamente valida.
 * TypeScript introduce funciones de compilación y validación de 
 * código a JavaScript, lo que permite detectar errores en compilación. 
 * En JavaScript estos errores solo se pueden detectar en ejecución.
 */

/**
 * Definición de variables 
 * TypeScript es más rigoroso que JavaScript.
 */

// declaracion normal con JavaScript
// var saludo = 'Hola mundo desde TypeScript';

// En TS podemos asignar el tipo de datos
// let saludo:String = 'Hola mundo desde TypeScript';

// Sin embargo, TS tambien cuenta con inferencia de tipo de datos, por lo que podemos declarar sin especificarlo
let saludo = 'Hola mundo desde TypeScript';

// si mas adelante, intentamos asignar valor de otro tipo, deberia dar error:
// saludo = 10; //ariables.ts:22:1 - error TS2322: Type 'number' is not assignable to type 'string'.

saludo = 'Cambio de valor string ';

// a diferencia del video curso, esta asignacion no me funciona
// let valor:number = 10;
let valor = 10;

// de igual manera, asignar un string a una variable de tipo numerico, deberia dar error

// valor = 'Otro valor'; //variables.ts:30:1 - error TS2322: Type 'string' is not assignable to type 'number'.

// estos mensajes se despliegan en la consola, una vez iniciemos la escucha automática en el directorio con tsc -w

// en el video curso esto causaba un error, pero acá es permitido
let numero;

// tipo de dato INDEFINIDO (NO RECOMENDADO)
// let cualquiera : any; <-- no funciona
let cualquiera; // esto pasa con la advertencia:
// Variable 'cualquiera' implicitly has type 'any' in some locations where its type cannot be determined.ts(7034)
cualquiera = 25.5;

// CONSTANTES
const PI = 3.1416;

// PI = 0.9999; //error TS2588: Cannot assign to 'PI' because it is a constant.

function saludar(){
    console.log(saludo);
    console.log(valor);
    console.log(numero);
    console.log(cualquiera);
    console.log(PI);
}

saludar();