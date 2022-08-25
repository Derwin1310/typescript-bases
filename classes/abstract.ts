(() => {
  //Una class abstracta no crea instancias, solo se puede extender a otras clases
  //Para usar sus propiedades como vemos aca
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ) {}
  }

  class Xmen extends Mutante {

    saveWorld() {
      console.log('Salvar al Mundo')
    }
  }
  class Villian extends Mutante {
    conquerWorld() {
      console.log('Conquistar al Mundo')
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan')
  const magneto = new Villian('Magneto', 'Magnus')

  // console.log(wolverine)
  // wolverine.saveWorld()
  // console.log(magneto)
  // magneto.conquerWorld()

  const printName = (char: Mutante) => {
    console.log(char.realName)
  }

  // printName(wolverine)

})()