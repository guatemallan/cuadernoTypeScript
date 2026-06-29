/**
 * CLASES
 */

class Persona{
    //esto da error, sera por estar offline?
    // private nombre:string;
    // private nombre;
    // let private nombre;

    // tambien da error
    // constructor(nombre:string){

    private nombre = '';
    constructor(nombre=''){
        this.nombre = nombre;
    }

    get nombre():string{
        return this.nombre;
    }
}

let personaUno = new Persona('Mario');
console.log(personaUno.nombre());

// TODO: nada en este codigo funciona como lo muestra el instructor, REVISAR