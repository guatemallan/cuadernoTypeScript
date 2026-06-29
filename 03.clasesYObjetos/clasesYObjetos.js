"use strict";
/**
 * CLASES
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    //esto da error, sera por estar offline?
    // private nombre:string;
    // private nombre;
    // let private nombre;
    // tambien da error
    // constructor(nombre:string){
    nombre = '';
    constructor(nombre = '') {
        this.nombre = nombre;
    }
    get nombre() {
        return this.nombre;
    }
}
let personaUno = new Persona('Mario');
console.log(personaUno.nombre());
// TODO: nada en este codigo funciona como lo muestra el instructor, REVISAR
//# sourceMappingURL=clasesYObjetos.js.map