// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean
  velocidadMaxima: number
  acelerar: () => void
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Joker {
  reir?: boolean
  comer?: boolean
  llorar?: boolean
}

const guason: Joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface cityzens {
  (nameOfCityzens: string[]): number
}

const ciudadGotica: cityzens = ( ciudadanos: string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface person {
  nombre: string
  edad: number
  sexo: string
  estadoCivil: string
  imprimirBio: () => void
}

class Persona implements person {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string,
  ) {}
  imprimirBio() {
    console.log(`hola ${this.nombre}`)
  }
}

const test = new Persona('Derwin', 24, 'masculino', 'soltero')
console.log(test)
test.imprimirBio()